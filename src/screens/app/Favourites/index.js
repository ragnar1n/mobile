import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../assets/data/products";
import FavouriteItem from "../../../components/FavouriteItem";
import Header from "../../../components/Header";

const Favourites=({navigation})=>{
    const renderItem=({item})=>{
        const onProductPress=()=>{
            navigation.navigate('ProductDetails',{product:item})
        }
        return(
            <FavouriteItem onPress={onProductPress} {...item}/>
        )
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header title='Favourites'/>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(item)=>String(item.id)}>Favourites</FlatList>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Favourites)