import React from "react";
import {Image,Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const GoogleLogin=({})=>{
    return(
        <TouchableOpacity activeOpacity={.6} style={styles.container}>
            <Image source={require('../../assets/Gmail.png')}/>
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin)