import React, {useState} from "react";
import { Image,TextInput, View, Text, Pressable } from "react-native";
import { styles } from "./styles";

const Input=({label,placeholder,isPassword})=>{
    const [isPasswordVisible, setIPWV]=useState(false)
    const onEyePress=()=>{
        setIPWV(!isPasswordVisible)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
            <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />
            {isPassword ?(
            <Pressable onPress={onEyePress}>
                <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png'): require('../../assets/eye_closed.png')}/>
            </Pressable>): null}
            </View>
        </View>
    )
}
export default Input