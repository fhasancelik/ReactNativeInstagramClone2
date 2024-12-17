import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Star from '../assets/icons/Star';
import User from '../assets/icons/User';
import {colors} from '../constants/colors';

const ForYouBox = ({yourFollows, fav}) => {
  console.log(fav);
  return (
    <View style={styles.forYouBox}>
      <TouchableOpacity onPress={yourFollows} style={styles.forYouButton}>
        <User width={20} height={20} />
        <Text style={styles.forYouText}>Takip Ettiklerin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fav} style={styles.forYouButton}>
        <Star width={20} height={20} />
        <Text style={styles.forYouText}>Favoriler</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForYouBox;

const styles = StyleSheet.create({
  forYouBox: {
    backgroundColor: '#ffffffe6',
    opacity: 1,
    width: 180,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    gap: 15,
    position: 'absolute',
    top: 50,
    left: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  forYouButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  forYouText: {
    color: colors.BLACK,
    fontSize: 15,
    fontWeight: '600',
  },
});
