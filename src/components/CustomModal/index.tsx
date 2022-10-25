import React, {FC, useEffect, useState} from 'react';
import {Image, Modal, Pressable, Text, View} from 'react-native';
import {TextValues} from '@constants/TextValues';
import {serviceItemsTypes} from '@constants/ServiceItemsTypes';
import {mapTypeToLabel} from '@utils/helpers/mapTypeToLabel';
import {AppImages} from '@assets/images';
import {ModalProps} from './types';
import {styles} from './styles';

export const CustomModal: FC<ModalProps> = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    data.photo && setImageURL(data.photo);
  }, [data.photo]);

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
            <Text style={styles.typeText}>
              {mapTypeToLabel(data.type, serviceItemsTypes)}
            </Text>
            {data.photo ? (
              <Image style={styles.modalImage} source={{uri: imageURL}} />
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
