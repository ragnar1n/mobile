import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";
const {width,height}=Dimensions.get('window')

export const styles=StyleSheet.create({
    image:{
        width:width,
        height:height * .45
    },
    list:{
        
    }
})