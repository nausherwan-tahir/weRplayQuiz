import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Row } from '../../Component';

const ResultScreen = ({navigation, route}) => {
  return (
    <ImageBackground source={require('../../assets/Images/cardBackground.png')} style={styles.imageBackground}>      
      <View style={styles.mainView}>
        <View style={styles.centerElement}>
          <View style={styles.animationButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
              <Image source={require("../../assets/Images/incorrect.png")}
              style={styles.animation}/>
            </TouchableOpacity>
          </View>
          <View style={styles.scorecard}>
              <Text style={styles.bigText}>SCORECARD</Text>
              <Text style={styles.bigText}>__________</Text>
          </View>
          <View style={styles.rows}>
            <Row column1={'Result'} column2={route.params.score > 5 ? 'PASS' : 'FAIL'} status={0}/>
            <Row column1={'Score'} column2={route.params.score} status={0}/>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Leaderboard')}>
                <Text style={styles.buttonText}>Finish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;
