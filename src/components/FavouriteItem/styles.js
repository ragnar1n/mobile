import { StyleSheet,Dimensions } from "react-native";
import {colors} from '../../utils/colors'

const {width}=Dimensions.get('window')
console.log('width => ',width)

export const styles=StyleSheet.create({
    container:{
        marginHorizontal:24,
        paddingVertical:16,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBlockColor:colors.borderColor

    },
    title:{
        color:colors.textGray,
        paddingVertical:8
    },
    image:{
        width:100,
        height:100,
        borderRadius:10,
        marginRight:20
    },
    imageContainer:{
        height:32,
        width:32,
        borderRadius:8,

    },
    price:{
        color:colors.black,
        paddingBottom:8
    },
    content:{
        flex:1
    },
    icon:{
        width:24,
        height:24
    }
})