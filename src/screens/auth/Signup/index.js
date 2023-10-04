import React,{useState} from "react";
import {Pressable, Text, TextInput, View,Image  } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signup=()=>{
    const [checked, setChecked]=useState(false)
    return (
        
        <View style={styles.container}>
            <AuthHeader title='Sign up'></AuthHeader>
            <Input label='Name' placeholder='John Doe'/>
            <Input label='Email' placeholder='example@mail.com'/>
            <Input isPassword label='Password' placeholder='********'/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign up"/>
            <Separator text='Or sign up with'></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}> Sign in</Text>
            </Text>
        </View>
        
    )
}

export default Signup