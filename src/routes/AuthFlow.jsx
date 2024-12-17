import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/AuthFlow/SignIn';
import SignUp from '../screens/AuthFlow/SignUp';

const AuthFlow = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignUp">
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthFlow;
