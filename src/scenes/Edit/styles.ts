import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.APP_BG,
    alignItems: 'center',
  },
  inputTitle: {
    fontSize: 36,
    textTransform: 'uppercase',
    color: THEME.PRIMARY,
    paddingHorizontal: 25,
    paddingVertical: 5,
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
});
