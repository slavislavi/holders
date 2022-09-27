import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.APP_BG,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputTitle: {
    fontSize: 36,
    textTransform: 'uppercase',
    color: THEME.PRIMARY,
    paddingHorizontal: 25,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '90%',
    paddingLeft: 12,
    color: THEME.PRIMARY,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: THEME.DANGER,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: THEME.SECONDARY,
    fontSize: 36,
    textTransform: 'uppercase',
    paddingHorizontal: 36,
  },
  switherContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '55%',
    alignItems: 'center',
    position: 'relative',
  },
  switcherLabel: {
    fontSize: 16,
    color: THEME.PRIMARY,
    lineHeight: 16,
    paddingRight: 5,
  },
  mapButton: {
    position: 'absolute',
    right: 0,
  },
  photoContainer: {
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
});
