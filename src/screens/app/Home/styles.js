import { StyleSheet } from "react-native";
import {colors} from '../../../utils/colors'

export const styles=StyleSheet.create({
    container:{
        padding:24

    },
    image:{
        width:18,
        height:18
    },
    title:{
        color:colors.blue,
        fontSize:26,
        fontWeight:'500',
        paddingHorizontal:16
    },
    list:{
        paddingVertical:24
    }
})