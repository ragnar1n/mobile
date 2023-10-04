import { StyleSheet } from "react-native";

import {colors} from '../../utils/colors'

export const styles=StyleSheet.create({
    container:{
        borderBlockColor:colors.gray,
        borderWidth:1,
        borderRadius:4,
        width:22,
        height:22
    },
    innerContainer:{
        backgroundColor:colors.gray,
        height:'100%',
        width:'100%',
        justifyContent:"center",
        alignItems:'center'
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:20,
        flex:1
    },
    label:{
        marginBottom:8,
        color:colors.blue,
        fontWeight:'500'
    },
    checkIcon:{
        width:18,
        height:13,
    }
})