import React from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {View, Alert, Text, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {TextValues} from '@constants/TextValues';
import {CustomImagePickerProps} from './types';
import {styles} from './styles';
import {CustomText} from '@components/CustomText';

export const CustomImagePicker = <T extends FieldValues>(
  props: CustomImagePickerProps<T>,
) => {
  const {
    field: {onChange, value},
  } = useController(props);

  const handlePhotoFromGallery = async () => {
    try {
      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          selectionLimit: 1,
        },
        response => {
          if (response.didCancel) {
            Alert.alert('You cancelled camera picker');
            return;
          } else if (response.errorCode === 'camera_unavailable') {
            Alert.alert('Camera not available on device');
            return;
          } else if (response.errorCode === 'permission') {
            Alert.alert('Permission not satisfied');
            return;
          } else {
            let source = response;
            const uri = source?.assets && source.assets[0].uri;
            onChange(uri);
          }
        },
      );
    } catch (error) {
      Alert.alert(`[Error]: ${JSON.stringify(error)}`);
      throw error;
    }
  };

  return value ? (
    <View style={styles.pickerContainer}>
      <TouchableOpacity
        style={styles.removePhotoButton}
        onPress={() => console.log('TODO: removing selected photo')}>
        <Text style={styles.removePhotoText}>{TextValues.RemovePhoto}</Text>
      </TouchableOpacity>
      <Image style={styles.userImage} source={{uri: value}} />
    </View>
  ) : (
    <TouchableOpacity
      style={styles.addPhotoButton}
      onPress={handlePhotoFromGallery}>
      <CustomText style={styles.pickerLabel}>{TextValues.AddPhoto}</CustomText>
    </TouchableOpacity>
  );
};
