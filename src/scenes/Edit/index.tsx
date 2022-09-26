import React, {FC, useState} from 'react';
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {CustomText} from '@components/CustomText';
import {TextValues} from '@constants/TextValues';
import {AppIcons} from '@assets/images';
import {THEME} from '@styles/theme';
import {styles} from './styles';

export const Edit: FC = () => {
  const {control, handleSubmit} = useForm();
  const [markOnMapSwitcher, setMarkOnMapSwitcher] = useState(false);

  const toggleSwitch = () => setMarkOnMapSwitcher(mark => !mark);

  const onSubmit = () => console.log('submitted');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomText style={styles.inputTitle}>{TextValues.FormTitle}</CustomText>

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

      <View style={styles.switherContainer}>
        <Text style={styles.switcherLabel}>{TextValues.MarkOnMapSwitcher}</Text>
        <Switch
          trackColor={{false: THEME.INACTIVE, true: THEME.DANGER_HOVER}}
          thumbColor={markOnMapSwitcher ? THEME.DANGER : THEME.PAGINATOR_DOT}
          onValueChange={toggleSwitch}
          value={markOnMapSwitcher}
        />
        {markOnMapSwitcher && (
          <TouchableOpacity
            onPress={() => console.log('Mark on map pressed')}
            style={styles.mapButton}>
            <AppIcons.EarthIcon width={40} height={40} />
          </TouchableOpacity>
        )}
      </View>

      <Controller
        control={control}
        name='description'
        render={({field: {value, onChange}}) => (
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.input}
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
