import React from 'react';
import { SafeAreaView } from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

const App=()=>{
  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
  )
}

export default App;
