import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const BackButton: FC = () => {
  const navigation = useNavigation();
  const handleBackStep = () => navigation.goBack();

  return (
    <View style={styles.buttonContainer}>
      <Button title='Back' onPress={handleBackStep} />
    </View>
  );
};
