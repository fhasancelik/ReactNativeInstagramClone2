import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
const LineText = () => {
  return (
    <View style={styles.lineBar}>
      <View style={styles.line} />
      <Text style={styles.text}>YA DA</Text>
      <View style={styles.line} />
    </View>
  );
};

export default LineText;

const styles = StyleSheet.create({
  lineBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems:"center",
    gap:30
  },
  line: {
    backgroundColor: colors.GRAY,
    flex: 1,
    height: 0.6,
  },
  text: {
    color: colors.GRAY,
    fontWeight:"900",
    fontSize:15
  },
});
