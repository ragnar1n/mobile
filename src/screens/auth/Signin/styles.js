import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles=StyleSheet.create({
    container:{
        padding:24,
        flexDirection:'column',
        height:'100%',
        borderWidth:1
    },
    image:{
        width:'100%',
        height:200
    },
    titleContainer:{
        marginVertical:54
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center"
    },
    innerTitle:{
        color:colors.orange,
        textDecorationLine:'underline'
    },
    footerText:{
        marginTop:36,
        textAlign:"center",
        color:colors.blue,
},
agreeRow:{
    flexDirection:'row',
    alignItems:'center'
},
agreeText:{
    color:colors.blue,
    marginHorizontal:14
},
agreeTextBold:{
    fontWeight:'bold'
},
button:{
    marginVertical:20
},
footerLink:{
    fontWeight:'bold'
}

})