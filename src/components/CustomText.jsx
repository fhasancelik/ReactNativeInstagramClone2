import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';

export const titleThemes = {
  TEXT_16_700_BLACK: 'TEXT_16_700_BLACK',
  TEXT_22_700_40_BLACK: 'TEXT_22_700_40_BLACK',
};

const CustomText = ({text, theme}) => {
  return <Text style={styles[theme]}>{text}</Text>;
};

export default CustomText;

export const styles = {
  TEXT_16_700_BLACK: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '700',
  }),
  TEXT_22_700_40_BLACK: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 40,
  }),
};
