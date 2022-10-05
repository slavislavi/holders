import React, {FC, useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import MapView, {MapPressEvent, PROVIDER_GOOGLE} from 'react-native-maps';
import {CustomText} from '@components/CustomText';
import {CustomImagePicker} from '@components/CustomImagePicker';
import {TextValues} from '@constants/TextValues';
import {AppIcons} from '@assets/images';
import {addNewServiceAction} from '@store/actions/manageService';
import {addressAndDateToServiceData} from '@utils/helpers/addressAndDateToServiceData';
import {THEME} from '@styles/theme';
import {FormDataValues} from './types';
import {styles} from './styles';

const {width, height} = Dimensions.get('window');

export const Edit: FC = () => {
  const [markOnMapSwitcher, setMarkOnMapSwitcher] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [isMap, setIsMap] = useState(false);

  const {control, handleSubmit, setValue, reset} = useForm({
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
    reset();
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
    <ScrollView contentContainerStyle={styles.container}>
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
            rules={{required: true}}
            render={({field: {value, onChange}}) => (
              <TextInput
                style={styles.input}
                placeholder={TextValues.NamePlaceholder}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='type'
            rules={{required: true}}
            render={({field: {value, onChange}}) => (
              <TextInput
                style={styles.input}
                placeholder={TextValues.TypePlaceholder}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='address'
            render={({field: {value, onChange}}) => (
              <TextInput
                style={styles.input}
                placeholder={TextValues.AddressPlaceholder}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {!keyboardStatus ? (
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
          ) : null}

          <Controller
            control={control}
            name='description'
            render={({field: {value, onChange}}) => (
              <TextInput
                multiline
                style={styles.input}
                placeholder={TextValues.DescPlaceholder}
                value={value}
                onChangeText={onChange}
              />
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
    </ScrollView>
  );
};
