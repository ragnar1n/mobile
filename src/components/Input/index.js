import React, {useState} from "react";
import { Image,TextInput, View, Text, Pressable } from "react-native";
import { styles } from "./styles";

const Input=({label,placeholder,isPassword,value,type,onChangeText,style,...props})=>{
    const [isPasswordVisible, setIPWV]=useState(false)
    const onEyePress=()=>{
        setIPWV(!isPasswordVisible)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ? (
                <Pressable style={styles.inputContainer}>
                    <Text style={[styles.placeholder,style]}>{placeholder}</Text>
                    <Image style={styles.arrow} source={require('../../assets/arrow.png')}></Image>
                </Pressable>
            ):(
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input,style]} {...props}/>
                {isPassword ?(
                <Pressable onPress={onEyePress}>
                <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png'): require('../../assets/eye_closed.png')}/>
                </Pressable>): null}
            </View>
            )}
            
        </View>
    )
}
export default Input