import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID= '671224213127-fkgpilpo3ese8loat0ht9hb9jokrmohg.apps.googleusercontent.com'
const IOS_CLIENT_ID='671224213127-oheuvth8ojqsrrub0e53m2q0s5aobn5v.apps.googleusercontent.com'
const REVERSED_CLIENT_ID='com.googleusercontent.apps.671224213127-oheuvth8ojqsrrub0e53m2q0s5aobn5v'

const App=()=>{
  useEffect(()=>{
    GoogleSignin.configure({
      scopes:['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:WEB_CLIENT_ID,
      offlineAccess:true,
      iosClientId:IOS_CLIENT_ID,
    })
  },[])
  return (
    <SafeAreaView>
      <Signup/>
    </SafeAreaView>
  )
}

export default React.memo(App);
