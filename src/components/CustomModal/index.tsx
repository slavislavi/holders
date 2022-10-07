import React, {FC, useState} from 'react';
import {Image, Modal, Pressable, Text, View} from 'react-native';
import {GetServiceDataResponse} from '@store/types';
import {TextValues} from '@constants/TextValues';
import {AppImages} from '@assets/images';
import {styles} from './styles';

type ModalProps = {
  data: GetServiceDataResponse;
};

export const CustomModal: FC<ModalProps> = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log('URI: ', data.photo);
  return (
    <>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.outerBox}>
          <View style={styles.innerBox}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalButton}>
                {TextValues.RemovePhoto}
              </Text>
            </Pressable>
            <Text style={styles.nameText}>{data.name}</Text>
            <Text style={styles.typeText}>{data.type}</Text>
            {data.photo ? (
              <Image style={styles.modalImage} source={AppImages.NoImage} />
            ) : (
              <Image style={styles.modalImage} source={AppImages.NoImage} />
            )}
            <Text style={styles.descriptionText}>{data.description}</Text>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.sectionItem}>{data.name}</Text>
      </Pressable>
    </>
  );
};
