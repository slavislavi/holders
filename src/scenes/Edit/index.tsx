import React, {FC} from 'react';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {CustomText} from '@components/CustomText';
import {styles} from './styles';

export const Edit: FC = () => {
  const {control, handleSubmit} = useForm();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomText style={styles.inputTitle}>fill the forms</CustomText>

      <Controller
        control={control}
        name='name'
        render={({field: {value, onChange}}) => (
          <TextInput
            placeholder='Name'
            value={value}
            onChangeText={onChange}
            // inlineImageLeft='search_icon'
          />
        )}
      />

      <Controller
        control={control}
        name='type'
        render={({field: {value, onChange}}) => (
          <TextInput
            placeholder='Type'
            value={value}
            onChangeText={onChange}
            // inlineImageLeft='search_icon'
          />
        )}
      />

      <Controller
        control={control}
        name='address'
        render={({field: {value, onChange}}) => (
          <TextInput
            placeholder='Address'
            value={value}
            onChangeText={onChange}
            // inlineImageLeft='search_icon'
          />
        )}
      />

      <Controller
        control={control}
        name='description'
        render={({field: {value, onChange}}) => (
          <TextInput
            multiline
            placeholder='Description'
            value={value}
            onChangeText={onChange}
            // inlineImageLeft='search_icon'
          />
        )}
      />
      <TextInput placeholder='File' />

      <TouchableOpacity style={styles.submitButton}>
        <CustomText style={styles.submitButtonText}>add new</CustomText>
      </TouchableOpacity>
    </ScrollView>
  );
};
