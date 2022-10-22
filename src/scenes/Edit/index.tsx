import React, {FC, useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import MapView, {MapPressEvent, PROVIDER_GOOGLE} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomText} from '@components/CustomText';
import {DropdownPicker} from '@components/DropdownPicker';
import {CustomImagePicker} from '@components/CustomImagePicker';
import {TextValues} from '@constants/TextValues';
import {serviceItemsTypes} from '@constants/ServiceItemsTypes';
import {addNewServiceAction} from '@store/actions/manageService';
import {addressAndDateToServiceData} from '@utils/helpers/addressAndDateToServiceData';
import {AppIcons} from '@assets/images';
import {THEME} from '@styles/theme';
import {FormDataValues} from './types';
import {styles} from './styles';

const {width, height} = Dimensions.get('window');

export const Edit: FC = () => {
  const [markOnMapSwitcher, setMarkOnMapSwitcher] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [isMap, setIsMap] = useState(false);

  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      name: '',
      type: '',
      address: {latitude: '', longitude: ''},
      description: '',
      photo: null,
    },
  });

  const dispatch = useDispatch();

  const toggleSwitch = () => setMarkOnMapSwitcher(mark => !mark);
  const showMap = () => setIsMap(true);

  const pickPointOnMap = (event: MapPressEvent) => {
    setIsMap(false);
    setValue(
      'address.latitude',
      event.nativeEvent.coordinate.latitude.toString(),
    );
    setValue(
      'address.longitude',
      event.nativeEvent.coordinate.longitude.toString(),
    );
  };

  const onSubmit: SubmitHandler<FormDataValues> = data => {
    dispatch(addNewServiceAction.request(addressAndDateToServiceData(data)));
    console.log('===submit data===>  ', addressAndDateToServiceData(data)); // REMOVE
    // reset();
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        {!isMap ? (
          <>
            {!keyboardStatus ? (
              <CustomText style={styles.inputTitle}>
                {TextValues.FormTitle}
              </CustomText>
            ) : null}

            <Controller
              control={control}
              name='name'
              rules={{required: true, maxLength: 24}}
              render={({field: {value, onChange, ref}, formState}) => (
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder={TextValues.NamePlaceholder}
                    value={value}
                    onChangeText={onChange}
                    ref={ref}
                  />
                  {formState.errors.name?.type === 'required' && (
                    <Text style={styles.errorText}>
                      {TextValues.NameReqiuredInputErrTxt}
                    </Text>
                  )}
                  {formState.errors.name?.type === 'maxLength' && (
                    <Text style={styles.errorText}>
                      {TextValues.NameLengthInputErrTxt}
                    </Text>
                  )}
                </View>
              )}
            />

            <DropdownPicker
              initialItems={serviceItemsTypes}
              control={control}
              name='type'
              placeholder={TextValues.DropdownPlaceholder}
            />

            <View style={styles.inputAddressBox}>
              <Controller
                control={control}
                name='address.latitude'
                rules={{max: 180}}
                render={({field: {value, onChange, ref}, formState}) => (
                  <View>
                    <TextInput
                      nativeID='address.latitude'
                      style={[styles.input, styles.inputAddress]}
                      placeholder={TextValues.AddressPlaceholderLt}
                      value={value}
                      onChangeText={onChange}
                      keyboardType='number-pad'
                      ref={ref}
                      maxLength={12}
                    />
                    {formState.errors.address?.latitude && (
                      <Text style={[styles.errorText, styles.errorAddressText]}>
                        {TextValues.LatLengthInputErrTxt}
                      </Text>
                    )}
                  </View>
                )}
              />

              <Controller
                control={control}
                name='address.longitude'
                rules={{max: 90}}
                render={({field: {value, onChange, ref}, formState}) => (
                  <View>
                    <TextInput
                      style={[styles.input, styles.inputAddress]}
                      placeholder={TextValues.AddressPlaceholderLg}
                      value={value}
                      onChangeText={onChange}
                      keyboardType='number-pad'
                      ref={ref}
                      maxLength={12}
                    />
                    {formState.errors.address?.longitude && (
                      <Text style={[styles.errorText, styles.errorAddressText]}>
                        {TextValues.LonLengthInputErrTxt}
                      </Text>
                    )}
                  </View>
                )}
              />
            </View>

            <View style={styles.switherContainer}>
              <Text style={styles.switcherLabel}>
                {TextValues.MarkOnMapSwitcher}
              </Text>
              <Switch
                trackColor={{false: THEME.INACTIVE, true: THEME.DANGER_HOVER}}
                thumbColor={
                  markOnMapSwitcher ? THEME.DANGER : THEME.PAGINATOR_DOT
                }
                onValueChange={toggleSwitch}
                value={markOnMapSwitcher}
              />
              {markOnMapSwitcher ? (
                <TouchableOpacity onPress={showMap} style={styles.mapButton}>
                  <AppIcons.EarthIcon width={40} height={40} />
                </TouchableOpacity>
              ) : null}
            </View>

            <Controller
              control={control}
              rules={{maxLength: 200}}
              name='description'
              render={({field: {value, onChange, ref}, formState}) => (
                <View style={styles.inputWrapper}>
                  <TextInput
                    multiline
                    style={styles.input}
                    placeholder={TextValues.DescPlaceholder}
                    value={value}
                    onChangeText={onChange}
                    ref={ref}
                  />
                  {formState.errors.description && (
                    <Text style={styles.errorText}>
                      {TextValues.DescrLengthInputErrTxt}
                    </Text>
                  )}
                </View>
              )}
            />

            {!keyboardStatus ? (
              <CustomImagePicker name='photo' control={control} />
            ) : null}

            {!keyboardStatus ? (
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit(onSubmit)}>
                <CustomText style={styles.submitButtonText}>
                  {TextValues.AddNewServiceButtonText}
                </CustomText>
              </TouchableOpacity>
            ) : null}
          </>
        ) : (
          <MapView
            provider={PROVIDER_GOOGLE}
            onPress={pickPointOnMap}
            style={{width: width, height: height}}
            initialRegion={{
              latitude: 41.61,
              longitude: 41.62,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
            }}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
