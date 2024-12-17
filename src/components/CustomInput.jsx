import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../constants/colors';
import Eye from '../assets/icons/Eye';

const CustomInput = ({placeholder, inputType}) => {
  console.log(placeholder, inputType);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.GRAY}
        style={styles.textInput}
      />
      <Eye
        style={{
          position: 'absolute',
          right: 10,
        }}
        fill={colors.GRAY}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#363636',
    borderColor: colors.GRAY,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: '100%',
  },
});
