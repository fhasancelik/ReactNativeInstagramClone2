import AuthFlow from './src/routes/AuthFlow';
import {NavigationContainer} from '@react-navigation/native';
import MainFlow from './src/routes/MainFlow';
import {useState} from 'react';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      {isLogin === true ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );

};

export default App;
