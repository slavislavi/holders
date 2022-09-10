import React, {FC} from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const BackButton: FC = () => {
  const navigation = useNavigation();
  const handleBackStep = () => navigation.goBack();

  return <Button title='Back' onPress={handleBackStep} />;
};
