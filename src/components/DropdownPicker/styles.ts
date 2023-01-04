import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.INACTIVE,
    alignSelf: 'center',
    borderRadius: 5,
    width: '90%',
    paddingLeft: 12,
    borderWidth: 0,
  },
  dropdownContainer: {
    backgroundColor: THEME.DROPDOWN,
    alignSelf: 'center',
    borderRadius: 5,
    width: '90%',
    paddingLeft: 12,
    borderWidth: 0,
  },
  text: {
    color: THEME.PRIMARY,
    fontSize: 18,
    textAlign: 'center',
  },
});
