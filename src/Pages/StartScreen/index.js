import React, { useState, useEffect } from 'react';
import {View, Text, Image, ScrollView, SafeAreaView, TextInput, ImageBackground, Alert, KeyboardAvoidingView} from 'react-native';
import {styles} from './styles';
import {blackColor, secondaryColor} from '../../Utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { loadUser, loading } from '../../redux/actions/AuthActions';
import {useDispatch} from 'react-redux';

export default StartScreen =  ({navigation}) => {
  const [name, setName] = useState('');
  let dispatch = useDispatch();
  
  useEffect(() => {
    setName('')
  }, []);

  const onStartPress = () => {
    if(name === '')
      Alert.alert("Enter name to start quiz");
    else
    {
      dispatch(loading(true));
      dispatch(loadUser(name))
      .then((response) => {
      if(response.type === 'AUTH_SUCCESS')
      {
        Alert.alert(
          "Success",
          "Authentication Succesfull",
          [
            { text: "OK", onPress: () => navigation.navigate('MainPage')}
          ]
        );
      }
      else
        Alert.alert('Authentication Failed');
      })
      .catch((err) => {
        Alert.alert({Error : err});
      })
    }
  }

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={secondaryColor}/>
      <ImageBackground source={require("../../assets/Images/background.png")} resizeMode="cover" style={styles.background}>
      <ScrollView>
        <View style={styles.titleBox}>
          <Text style={styles.bigText}>
            QUIZ
          </Text>
        </View>
        <KeyboardAvoidingView behavior={'position'}>
        <View style={styles.centerElement}>
          <View style={styles.animationBox}>
            <Image source={require("../../assets/Images/user.png")}
            style={styles.animation}/>
          </View>  
          <View style={styles.buttonBox}>
              <TextInput autoCapitalize={'none'} autoCorrect={false} onChangeText = {(text) => setName(text)} 
              value={name} style={styles.inputField} placeholder={'Name'} placeholderTextColor={blackColor}/>
            <TouchableOpacity onPress={() => onStartPress()} style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};