import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  outerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.PRIMARY_HOVER,
  },
  innerBox: {
    position: 'relative',
    backgroundColor: THEME.SECONDARY,
    width: '75%',
    height: 'auto',
  },
  sectionItem: {
    fontSize: 22,
    padding: 10,
    height: 50,
  },
  closeModalButton: {
    position: 'absolute',
    right: 0,
    top: -12,
    fontSize: 42,
    color: THEME.DANGER,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  typeText: {
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
