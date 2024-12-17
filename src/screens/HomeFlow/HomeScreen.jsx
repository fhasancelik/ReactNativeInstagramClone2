import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import User from '../../assets/icons/User';
import {colors} from '../../constants/colors';
import Star from '../../assets/icons/Star';
import {useState} from 'react';
import ForYouBox from '../../components/ForYouBox';
import {useNavigation} from '@react-navigation/native';
import {routeNames} from '../../routes/routeNames';

const HomeScreen = () => {
  const [visibleForYouBox, setVisibleForYouBox] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <Header
        screenName={'NewFollowing'}
        forYou={() => setVisibleForYouBox(prevState => !prevState)}
      />
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'orange',
        }}></View>

      {visibleForYouBox === true ? (
        <ForYouBox
          yourFollows={() =>
            navigation.navigate(routeNames.YOUR_FOLLOWS_SCREEN, {
              headerTitle: 'Takip Ettiklerin',
            })
          }
        />
      ) : null}
    </View>
  );
};

export default HomeScreen;

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
