import React from "react";
import {Image,Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { GoogleSignin,statusCodes } from "@react-native-google-signin/google-signin";


const GoogleLogin=()=>{
    const signIn=async()=>{
        try{
            await GoogleSignin.hasPlayServices();
            const userInfo=await GoogleSignin.signIn();
            console.log('userInfo => ',userInfo)
        } catch(error){
            if(error.code===statusCodes.SIGN_IN_CANCELLED){
                //cancelled
            }else if(error.code===statusCodes.IN_PROGRESS){
                //already in progress
            }else if(error.code===statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
                //not available or outdated
            }else{
                //error
            }
        }
    }

    return(
        <TouchableOpacity activeOpacity={.6} style={styles.container}>
            <Image source={require('../../assets/Gmail.png')}/>
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin)