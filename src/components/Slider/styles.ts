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
    color: THEME.PRIMARY_HOVER,
  },
  paginatorWrapper: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: THEME.PAGINATOR_DOT,
    marginHorizontal: 8,
  },
  skipButton: {
    position: 'absolute',
    backgroundColor: THEME.DANGER,
    borderRadius: 100,
    padding: 20,
  },
  skipText: {
    fontSize: 32,
    lineHeight: 32,
    color: THEME.SECONDARY,
  },
});
