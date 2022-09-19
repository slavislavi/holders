import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.HOME_BG,
  },
  item: {
    fontSize: 24,
    padding: 10,
    height: 50,
  },
  sectionHeader: {
    padding: 10,
    fontSize: 32,
    color: THEME.SECONDARY,
    backgroundColor: THEME.PAGINATOR_DOT,
  },
});
