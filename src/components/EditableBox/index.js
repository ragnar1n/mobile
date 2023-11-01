import React from "react";
import { Pressable, View, Image, Text,TextInput } from "react-native";
import { styles } from "./styles";

const EditableBox=({label,onChangeText,value,editable})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input}></TextInput>
        </View>
    )
}
export default React.memo(EditableBox)