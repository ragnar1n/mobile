import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";


const FavouriteItem=({onPress,title,image,price})=>{
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price} >{price}</Text>
            </View>
            <Image style={styles.icon} source={require('../../assets/close.png')}></Image>
        </Pressable>
    )
}
export default React.memo(FavouriteItem)