import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
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
    backgroundColor: THEME.INACTIVE,
    borderRadius: 5,
    width: '90%',
    paddingLeft: 12,
    color: THEME.PRIMARY,
    fontSize: 18,
  },
  inputAddress: {
    width: '100%',
    minWidth: 160,
    maxWidth: 170,
  },
  submitButton: {
    backgroundColor: THEME.DANGER,
    borderRadius: 5,
    minWidth: 225,
    height: 50,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: THEME.SECONDARY,
    fontSize: 28,
    textTransform: 'uppercase',
    paddingHorizontal: 36,
    textAlign: 'center',
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
  userImage: {
    width: 148,
    height: 148,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  inputAddressBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  errorText: {
    position: 'absolute',
    bottom: -18,
    left: '8%',
    color: THEME.DANGER,
    fontSize: 12,
  },
  errorAddressText: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    color: THEME.DANGER,
    fontSize: 12,
  },
});
