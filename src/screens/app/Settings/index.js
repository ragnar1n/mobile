import React, { useState } from "react";
import { View, Text,Linking,Image, Pressable} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import ListItem from "../../../components/ListItem";
import Header from "../../../components/Header";
import EditableBox from "../../../components/EditableBox";

const Settings=()=>{
    const [editing,setEditing]=useState(false)
    const [values,setValues]=useState({name:'User',email:'user@mail.com'})
    const onChange=(key,value)=>{
        setValues(v=>({...v,[key]:value}))
    }
    const onEditPress=()=>{
        setEditing(true)
    }
    const onSave=()=>{
        setEditing(false)
    }
    const onItemPress=()=>{
        Linking.openURL('https://google.com')
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <Header title='Settings'></Header>
            <View style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')}></Image>
                    </Pressable>
                    
                </View>
                    
                    <EditableBox onChangeText={(v)=>onChange('name',v)} label='Name' value={values.name} editable={editing}></EditableBox>
                    <EditableBox onChangeText={(v)=>onChange('email',v)} label='Email' value={values.email} editable={editing}></EditableBox>
                    {editing ? (<Button style={styles.button} onPress={onSave} title='Save'/>):null}
                    <Text style={[styles.sectionTitle,{marginTop:40}]}>Help Center</Text>
                    <ListItem onPress={onItemPress} style={styles.item} title='FAQ'></ListItem>
                    <ListItem onPress={onItemPress} style={styles.item} title='Contact us' ></ListItem>
                    <ListItem onPress={onItemPress} style={styles.item} title='Privacy & Terms'></ListItem>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Settings)