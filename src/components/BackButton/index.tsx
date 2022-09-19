import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const BackButton: FC = () => {
  const navigation = useNavigation();
  const handleBackStep = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleBackStep}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};
