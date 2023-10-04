import React from "react";
import {Pressable, Text, TextInput, View,  } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

const Signup=()=>{
    return (
        
        <View style={styles.container}>
            <AuthHeader title='Sign up'></AuthHeader>
            <Input label='Name' placeholder='John Doe'/>
            <Input label='Email' placeholder='example@mail.com'/>
            <Input isPassword label='Password' placeholder='********'/>
            <Button title="Sign up"/>

        </View>
        
    )
}

export default Signup