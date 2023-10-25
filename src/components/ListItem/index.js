import React from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";

const ListItem=(title,subtitle)=>{
    const onLogout=()=>{

    }
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
        </View>
    )
}
export default React.memo(ListItem)