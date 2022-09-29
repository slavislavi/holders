import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  pickerLabel: {
    fontSize: 16,
    color: THEME.PRIMARY,
    lineHeight: 16,
    paddingRight: 5,
  },
  pickerContainer: {
    flexDirection: 'row-reverse',
  },
  removePhotoButton: {
    width: 80,
    paddingLeft: 25,
  },
  removePhotoText: {
    fontSize: 48,
    lineHeight: 52,
    fontWeight: '700',
    color: THEME.DANGER,
  },
  userImage: {
    width: 148,
    height: 148,
  },
});
