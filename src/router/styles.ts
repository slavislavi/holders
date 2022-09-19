import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: THEME.HEADER_BG,
  },
  tabLabel: {
    fontWeight: '900',
  },
  tabLabelActive: {
    color: THEME.HEADER_TEXT,
  },
  tabLabelInactive: {
    color: THEME.SECONDARY_HOVER,
  },
  tabIcon: {
    color: THEME.HEADER_TEXT,
  },
});
