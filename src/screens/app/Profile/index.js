import React from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import ListItem from "../../../components/ListItem";
import Header from "../../../components/Header";

const Profile=({navigation})=>{
    const num=10
    const onLogout=()=>{

    }
    const onSettingsPress=()=>{
        navigation.navigate('Settings')
    }
    const onNewListingPress=()=>{
        navigation.navigate('CreateListing')
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title='Profile' showLogout onLogout={onLogout}>Profile</Header>
                    <Text style={styles.name}>Username</Text>
                    <Text style={styles.email}>Email</Text>
            
                    <ListItem title='My Listings' subtitle={`Already have ${num} listings`} ></ListItem>
                    <ListItem title='Settings' subtitle='Account, FAQ, Contact' onPress={onSettingsPress}></ListItem>
                
                </View>
                <Button onPress={onNewListingPress} title='Add New Listing'/>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Profile)