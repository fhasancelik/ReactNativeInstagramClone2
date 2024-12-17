import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeFlow/HomeScreen';
import FavPostsScreen from '../screens/HomeFlow/FavPostsScreen';
import YourFollowsScreen from '../screens/HomeFlow/YouFollowsScreen';
import {routeNames} from './routeNames';

const HomeFlow = () => {
  const HomeStack = createNativeStackNavigator();
  const {HOME_SCREEN, FAV_POSTS_SCREEN, YOUR_FOLLOWS_SCREEN} = routeNames;

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen name={FAV_POSTS_SCREEN} component={FavPostsScreen} />
      <HomeStack.Screen
        name={YOUR_FOLLOWS_SCREEN}
        component={YourFollowsScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeFlow;
