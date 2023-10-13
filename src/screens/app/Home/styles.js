import { StyleSheet } from "react-native";
import {colors} from '../../../utils/colors'

export const styles=StyleSheet.create({
    container:{
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'flex-start',
        marginBottom:54,
        marginLeft: 30,

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