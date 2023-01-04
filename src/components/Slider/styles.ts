import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.APP_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 3,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    marginTop: 16,
  },
  textWrapper: {
    flex: 0.3,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: THEME.PRIMARY,
  },
  description: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 54,
    color: THEME.PRIMARY_HOVER,
  },
  paginatorWrapper: {
    flexDirection: 'row',
    height: 44,
    marginTop: 10,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: THEME.PAGINATOR_DOT,
    marginHorizontal: 8,
    marginTop: 10,
  },
  skipButton: {
    position: 'absolute',
    backgroundColor: THEME.PAGINATOR_DOT,
    borderRadius: 100,
    padding: 30,
  },
  skipText: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 36,
    color: THEME.SECONDARY,
  },
});
