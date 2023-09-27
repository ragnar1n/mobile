import React from "react";
import { Pressable,Text } from "react-native";

const Button=({title})=>{
    const handlePress=()=>{
        console.log('Button clicked')
    }
    return(
        <Pressable hitSlop={24} onPress={handlePress}>
            <Text>{title}</Text>
        </Pressable>
    )
}
export default Button