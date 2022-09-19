import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 10,
    backgroundColor: THEME.PRIMARY_HOVER,
    borderRadius: 5,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: THEME.SECONDARY,
    padding: 10,
  },
});
