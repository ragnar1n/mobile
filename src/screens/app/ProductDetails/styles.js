import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../utils/colors'
const {height}=Dimensions.get('window')

export const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:54,
        marginLeft: 30
    },
    image:{
        width:'100%',
        height:height*.45
    },
    title:{

        fontSize:24,
        fontWeight:'500',
        marginTop:40
    },
    content:{
        backgroundColor:colors.white,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        marginTop:-40,
        paddingHorizontal:24
    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:8
    },
    description:{
        color:colors.textGray,
        fontWeight:'300',
        marginVertical:8
    },
    footer:{
        padding:24,
        flexDirection:'row',
        alignItems:'center'
    },
    save:{
        flex:1
    },
    bookmarkContainer:{
        backgroundColor:colors.lightGray,
        padding:18,
        borderRadius:8,
        marginRight:16
    },
    bookmarkIcon:{
        width:24,
        height:24
    },
    but:{
        flex:1
    },
    backContainer:{
        backgroundColor:colors.white,
        padding:10,
        margin:24,
        borderRadius:8,
        position:'absolute'
    },
    backIcon:{
        width:20,
        height:20
    }
})