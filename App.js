import React, {useEffect, useState} from 'react';
import { Image } from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/app/Home';
import Favourites from './src/screens/app/Favourites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {colors} from './src/utils/colors';
export const UserContext=React.createContext()

const WEB_CLIENT_ID= '671224213127-fkgpilpo3ese8loat0ht9hb9jokrmohg.apps.googleusercontent.com'
const IOS_CLIENT_ID='671224213127-oheuvth8ojqsrrub0e53m2q0s5aobn5v.apps.googleusercontent.com'
const REVERSED_CLIENT_ID='com.googleusercontent.apps.671224213127-oheuvth8ojqsrrub0e53m2q0s5aobn5v'

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

const ProfileStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
      <Stack.Screen name='CreateListing' component={CreateListing} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const Tabs=()=>{
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let icon

        if(route.name==='Home'){
          icon=focused
          ? require('./src/assets/home-blue.png')
          : require('./src/assets/home.png')
        }else if(route.name==='Favourites'){
          icon=focused
          ? require('./src/assets/bookmark-blue.png')
          : require('./src/assets/bookmark.png')
        }else if(route.name==='Profile'){
          icon=focused
          ? require('./src/assets/profile-blue.png')
          : require('./src/assets/profile.png')
        }
        return <Image style={{width:24,height:24}} source={icon}/>
      },
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{borderTopColor:colors.lightGray}
    })}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Favourites' component={Favourites}/>
      <Tab.Screen name='Profile' component={ProfileStack}/>
    </Tab.Navigator>
  )
}

const App=()=>{
  const [user,setUser]=useState()

  useEffect(()=>{
    (async()=>{
      const accessToken=await AsyncStorage.getItem('auth_token')
      setUser({accessToken})
    })
  })

  useEffect(()=>{
    GoogleSignin.configure({
      scopes:['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:WEB_CLIENT_ID,
      offlineAccess:true,
      iosClientId:IOS_CLIENT_ID,
    })
  },[])

const theme={
  colors: {
    background:colors.white
  },
}

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user,setUser}}>
        <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          user?.accessToken ? (
            <>
              <Stack.Screen name='Tabs' component={Tabs} options={{headerShown:false}}/>
              <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>
            </> ) : (
              <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
              <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
              <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
              </>
          )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
      
    </SafeAreaProvider>
  )
}

export default React.memo(App);
