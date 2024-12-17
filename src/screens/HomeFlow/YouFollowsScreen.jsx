import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {useRoute} from '@react-navigation/native';

const YourFollowsScreen = () => {
  const route = useRoute();
  const {headerTitle} = route.params;
  return (
    <View>
      <Header screenName={headerTitle} />
    </View>
  );
};
export default YourFollowsScreen;
