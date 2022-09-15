import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.ABOUT_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 3,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 0.3,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
    color: THEME.PRIMARY,
  },
  description: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 64,
    color: THEME.PRIMARY,
  },
});
