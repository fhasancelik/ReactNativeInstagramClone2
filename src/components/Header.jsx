import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Logo from '../assets/icons/logo';
import {colors} from '../constants/colors';

import ArrowLeft from '../assets/icons/ArrowLeft';
import {
  AddPost,
  ChevronDown,
  ChevronLeft,
  Heart,
  Messages,
  More,
  VerifiedBadge,
} from '../assets/icons';
import CustomText, {titleThemes} from './CustomText';
import { Notification } from '../assets/icons/Notification';

/** Component oluşturma haritası
 *
 * tanımlayıcı  Component Adı = fonksiyon ()=>{ return(jsx) }
 *
 * const BenimKomponent= ()=>{return(<View></View>)}
 *
 */

const Header = ({screenName}) => {
  return (
    <View style={styles.header}>
      {screenName === 'NewFollowing' && <ChevronLeft />}

      {screenName === 'HomeScreen' && (
        <View style={styles.headerLeft}>
          <Logo />
          <ChevronDown />
        </View>
      )}

      {screenName === 'NewFollowing' && (
        <View style={styles.headerMiddle}>
          <CustomText text={'usernama'} theme={titleThemes.TEXT_16_700_BLACK} />
          <VerifiedBadge />
        </View>
      )}

      {screenName === 'HomeScreen' && (
        <View style={styles.headerRight}>
          <Heart />
          <Messages />
          <AddPost />
        </View>
      )}

      {
        screenName==="NewFollowing"&&(
          <View style={styles.headerRight}> 
            <Notification/>
            <More/>
            </View>
        )
      }
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 5,
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 24,
  },
  headerMiddle: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});
