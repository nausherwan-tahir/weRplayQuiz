import React, { useState } from "react";
import { View, Text, Image, ImageBackground, SafeAreaView, Alert , TouchableOpacity} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import {useSelector, useDispatch} from 'react-redux';
import { styles } from "./styles";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { logoutUser } from "../../redux/actions/AuthActions";

const CustomDrawer = (props) => {
    let dispatch = useDispatch();

    const logout = () => {
        console.log("User Logged out")
        dispatch(logoutUser())
        .then((response) => {
            if(response.type === 'LOGOUT')
            {
                Alert.alert(
                    "Logout",
                    "Success",
                    [
                      { text: "OK", onPress: () => props.navigation.navigate('StartScreen')}
                    ]
                );
            } else {
                Alert.alert(
                    "Error",
                    "Logout Error",
                    [
                      { text: "OK", onPress: () => props.navigation.navigate('Quiz')}
                    ]
                  );
            }
        })
        .catch((error) => {
            Alert.alert(error);
        })
    }

    const [username, setUserName] = useState(useSelector(state => state.main.userData))
    return(
        <View style={styles.main}>
            <SafeAreaView />
            <DrawerContentScrollView {...props} contentContainerStyle={styles.content}>
                <ImageBackground source={require('../../assets/Images/drawerImage.png')} style={styles.background}>
                    <Image source={require('../../assets/Images/user.png')} style={styles.icon}/>
                    <Text style={styles.name}>{username && username}</Text>
                    <View style={{justifyContent:'center', alignItems:'center', position:'absolute', bottom:5, right:5}}>
                        <TouchableOpacity onPress={() => logout()}>
                            <Image source={require('../../assets/Images/logout.png')} style={styles.logout}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.drawerList}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={styles.drawerFooter}>
                <Text style={styles.text}>weRplay</Text>
            </View>
        </View>
)}
export default CustomDrawer;