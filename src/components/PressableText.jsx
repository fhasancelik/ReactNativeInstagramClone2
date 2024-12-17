import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import Facebook from '../assets/icons/facebook';
const PressableText = props => {
  
  return (
    <TouchableOpacity style={styles.iconText}>
      {props.hasIcon === true && <Facebook />}
      <Text style={[styles.text, {color: props.color}]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  iconText: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
