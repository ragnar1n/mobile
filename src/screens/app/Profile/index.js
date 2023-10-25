import React from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";

const Profile=()=>{
    const onLogout=()=>{

    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header title='Profile' showLogout onLogout={onLogout}>Profile</Header>
                <Text style={styles.name}>Username</Text>
                <Text style={styles.email}>Email</Text>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Profile)