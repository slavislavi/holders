import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  pickerLabel: {
    fontSize: 24,
    color: THEME.PRIMARY,
    textTransform: 'uppercase',
    lineHeight: 32,
  },
  pickerContainer: {
    flexDirection: 'row-reverse',
  },
  removePhotoButton: {
    width: 80,
    paddingLeft: 25,
  },
  addPhotoButton: {
    borderWidth: 1,
    paddingHorizontal: 46,
    borderColor: THEME.DANGER,
    borderRadius: 5,
    height: 48,
    justifyContent: 'center',
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
