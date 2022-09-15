import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.PRIMARY,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});
