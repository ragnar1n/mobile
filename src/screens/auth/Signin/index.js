import React,{useState} from "react";
import {Pressable, Text, TextInput, View,Image  } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin=()=>{
    const [checked, setChecked]=useState(false)
    return (
        
        <View style={styles.container}>
            <AuthHeader title='Sign in'></AuthHeader>
            <Input label='Email' placeholder='example@mail.com'/>
            <Input isPassword label='Password' placeholder='********'/>
            <Button style={styles.button} title="Sign up"/>
            <Separator text='Or sign in with'></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign up</Text>
            </Text>
        </View>
        
    )
}

export default React.memo(Signin)