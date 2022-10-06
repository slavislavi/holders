import React, {FC, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import {GetServiceDataResponse} from '@store/types';
import {TextValues} from '@constants/TextValues';
import {styles} from './styles';
import {firebase} from '@react-native-firebase/storage';

type ModalProps = {
  data: GetServiceDataResponse;
};

export const CustomModal: FC<ModalProps> = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState<ImageSourcePropType>();

  let imageRef = firebase
    .storage()
    .ref(data.photo?.assets && data.photo?.assets[0].fileName);
  imageRef
    .getDownloadURL()
    .then(url => {
      return setImageUrl(url);
    })
    .catch(e => console.log('getting downloadURL of image error => ', e));

  const handleModalVisible = () => setModalVisible(!modalVisible);

  return (
    <>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.outerBox}>
          <View style={styles.innerBox}>
            <Pressable onPress={handleModalVisible}>
              <Text style={styles.closeModalButton}>
                {TextValues.RemovePhoto}
              </Text>
            </Pressable>
            <Text style={styles.nameText}>{data.name}</Text>
            <Text style={styles.typeText}>{data.type}</Text>
            <Image source={imageUrl} />
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.sectionItem}>{data.name}</Text>
      </Pressable>
    </>
  );
};
