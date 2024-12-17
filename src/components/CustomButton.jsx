import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors} from '../constants/colors';
const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.BLUE,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});
