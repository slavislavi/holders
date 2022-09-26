import React, {FC} from 'react';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {CustomText} from '@components/CustomText';
import {TextValues} from '@constants/TextValues';
import {styles} from './styles';

export const Edit: FC = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = () => console.log('submitted');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomText style={styles.inputTitle}>{TextValues.FormTitle}</CustomText>

      <Controller
        control={control}
        name='name'
        render={({field: {value, onChange}}) => (
          <TextInput
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
            placeholder={TextValues.AddressPlaceholder}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name='description'
        render={({field: {value, onChange}}) => (
          <TextInput
            multiline
            placeholder={TextValues.DescPlaceholder}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <TextInput placeholder={TextValues.FilePlaceholder} />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}>
        <CustomText style={styles.submitButtonText}>
          {TextValues.AddButtonText}
        </CustomText>
      </TouchableOpacity>
    </ScrollView>
  );
};
