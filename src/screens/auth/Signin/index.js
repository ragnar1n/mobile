import React,{useState, useContext} from "react";
import {Pressable, Text, TextInput, View,Image  } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { UserContext } from "../../../../App";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

import { SafeAreaView } from "react-native-safe-area-context";
import Signup from "../Signup";

const Signin=({navigation})=>{
    const [values,setValues]=useState({})
    const {user,setUser}=useContext(UserContext)

    const onBack=()=>{
        navigation.goBack()
    }

    const onSignup=()=>{
        navigation.navigate('Signup')
    }

    const onChange=(key,value)=>{
        setValues(v=>({...v,[key]:value}))
    }

    const onSignin=()=>{
        if(!values?.email||!values?.password){
            Alert.alert('All fields are required!')
            return
        }

            axios.post('http://192.168.18.4/api/user/login',values)
            .then(async (response)=>{console.log(response?.data?.accessToken)
            const accessToken=response?.data?.accessToken
            setUser({accessToken})
            if(response?.data?.token){
                await AsyncStorage.setItem('auth_token',`${response?.data?.token}`)
            }})
            .catch(error=>{console.error('login error => ', error.response.data);})
        }
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title='Sign in'></AuthHeader>
            <Input value={values.email} onChangeText={(v)=>onChange('email',v)} label='Email' placeholder='example@mail.com'/>
            <Input value={values.password} onChangeText={(v)=>onChange('password',v)} isPassword label='Password' placeholder='********'/>
            <Button style={styles.button} title="Sign in" onPress={onSignin}/>
            <Separator text='Or sign in with'></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Don't have an account?
                <Text onPress={onSignup} style={styles.footerLink}> Sign up</Text>
            </Text>
        </View>
        </SafeAreaView>
        
    )
}

export default React.memo(Signin)