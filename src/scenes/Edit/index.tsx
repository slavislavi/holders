import React, {FC, useEffect, useState} from 'react';
import {
  Image,
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
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {CustomText} from '@components/CustomText';
import {TextValues} from '@constants/TextValues';
import {AppIcons} from '@assets/images';
import {THEME} from '@styles/theme';
import {styles} from './styles';
import {FormDataValues} from './types';
import {addNewServiceAction} from '@store/actions/manageService';
import {addDateToServiceData} from '@utils/helpers/addDateToServiceData';

export const Edit: FC = () => {
  const [markOnMapSwitcher, setMarkOnMapSwitcher] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [image, setImage] = useState<ImagePickerResponse | null>(null);

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      name: '',
      type: '',
      address: '',
      description: '',
      photo: null,
    },
  });

  const dispatch = useDispatch();

  const toggleSwitch = () => setMarkOnMapSwitcher(mark => !mark);

  const handlePhotoFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        setImage(response);
      },
    );
  };

  const onSubmit: SubmitHandler<FormDataValues> = data => {
    dispatch(addNewServiceAction.request(addDateToServiceData(data)));
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
      {!keyboardStatus ? (
        <CustomText style={styles.inputTitle}>
          {TextValues.FormTitle}
        </CustomText>
      ) : null}

      <Controller
        control={control}
        name='name'
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
            thumbColor={markOnMapSwitcher ? THEME.DANGER : THEME.PAGINATOR_DOT}
            onValueChange={toggleSwitch}
            value={markOnMapSwitcher}
          />
          {markOnMapSwitcher ? (
            <TouchableOpacity
              onPress={() => console.log('Mark on map pressed')}
              style={styles.mapButton}>
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
        image?.assets ? (
          <View style={styles.photoContainer}>
            <TouchableOpacity
              style={styles.removePhotoButton}
              onPress={() => setImage(null)}>
              <Text style={styles.removePhotoText}>
                {TextValues.RemovePhoto}
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.userImage}
              source={{
                uri: image?.assets[0].uri,
              }}
            />
          </View>
        ) : (
          <TouchableOpacity
            control={control}
            name='photo'
            onPress={() => handlePhotoFromGallery()}>
            <Text style={styles.switcherLabel}>{TextValues.AddPhoto}</Text>
          </TouchableOpacity>
        )
      ) : null}

      {!keyboardStatus ? (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}>
          <CustomText style={styles.submitButtonText}>
            {TextValues.AddButtonText}
          </CustomText>
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
};
