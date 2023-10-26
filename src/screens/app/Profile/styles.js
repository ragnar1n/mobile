import { StyleSheet } from "react-native";
import {colors} from '../../../utils/colors'

export const styles=StyleSheet.create({
    container:{
        padding:24,
        flex:1
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.black,
        marginBottom:12
    },
    email:{
        color:colors.gray,
        fontSize:14,
    },
    content:{
        flex:1
    }
})