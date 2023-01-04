import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    backgroundColor: THEME.APP_BG,
  },
  drawerItem: {
    backgroundColor: THEME.INACTIVE,
  },
  label: {
    color: THEME.PAGINATOR_DOT,
    fontWeight: '700',
  },
});
