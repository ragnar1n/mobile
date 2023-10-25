import { StyleSheet } from "react-native";
import {colors} from '../../utils/colors'

export const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        width:18,
        height:18
    },
    title:{
        color:colors.black,
        fontSize:16,
        fontWeight:'bold',
    },
    icon:{
        width:24,
        height:24,

    },
    space:{
        width:24
    }
})