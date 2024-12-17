import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeFlow/HomeScreen';
import AddPostScreen from '../screens/AddPostScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeFlow from './HomeFlow';

const MainFlow = () => {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TabNavigator.Screen name="HomeFlow" component={HomeFlow} />
      <TabNavigator.Screen name="SearchScreen" component={SearchScreen} />
      <TabNavigator.Screen name="AddPostScreen" component={AddPostScreen} />
    </TabNavigator.Navigator>
  );
};
export default MainFlow;
