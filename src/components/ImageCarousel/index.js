import React from "react";
import { FlatList,Image } from "react-native";
import {styles} from './styles'

const ImageCarousel=({images})=>{
    const renderImage=({item})=>{
        return(
            <Image style={styles.image} source={{uri: item}}/>
        )
    }
    return(
        <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} />
    )
}
export default React.memo(ImageCarousel)