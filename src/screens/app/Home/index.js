import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../assets/data/categories";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { products } from "../../../assets/data/products";


const Home=({navigation})=>{
    const [selectedCategory,setSelectedCategory]=useState()
    const [selectedProducts,setSelectedProducts]=useState(products)
    const [keyword,setKeyword]=useState()

    useEffect(()=>{
        if(selectedCategory && !keyword){
            const updateSelectedProducts=products.filter((product)=>product?.category===selectedCategory)
        setSelectedProducts(updateSelectedProducts)
        }else if(keyword && selectedCategory){
            const updatedSelectedProducts=products.filter((product)=>product?.category===selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        }else if(keyword && !selectedCategory){
            const updatedSelectedProducts=products.filter((product)=>product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        }else if(!keyword && !selectedCategory){
            setSelectedProducts(products)
        }
        
    },[selectedCategory,keyword])
        

    const renderCategoryItem=({item})=>{
        console.log('item => ',item)
        return(
            <CategoryBox onPress={()=>setSelectedCategory(item?.id)} isSelected={item.id===selectedCategory} image={item?.image} title={item?.title}/>
        )
    }
    const renderProductHomeItem=({item})=>{
        const onProductPress=(product)=>{
            navigation.navigate('ProductDetails',{product})
        }
        return(
            <ProductHomeItem onPress={()=>onProductPress(item)} {...item}/>
        )
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header onSearchKeyword={setKeyword} keyword={keyword} showSearch={true} title={'Find All You Need'}/>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index)=>String(index)}/>
                <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductHomeItem} keyExtractor={(item)=>String(item.id)} ListFooterComponent={<View style={{height:250}}/>}/>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)