import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import {styles} from './styles';
import {secondaryColor} from '../../Utils';
import {useDispatch, useSelector} from 'react-redux';
import { loadQuestions} from '../../redux/actions/GameActions';
import { loading } from '../../redux/actions/AuthActions';

export default HomeScreen = (props) => {
  const {navigation} = props;
  let dispatch = useDispatch();
  useEffect(() => {
  }, []);

  const onSelection = (screen) => {
    dispatch(loading(true));
    dispatch(loadQuestions())
    .then((response) => {
      if(response.type === 'QUESTIONS_SUCCESS')
      {
        navigation.navigate(screen === 1 ? 'SportsQuiz' : screen === 2 ? 'ScienceQuiz' : 'MathsQuiz')
      }
      else
      {
        () => Alert.alert("Questions not found");
      }
    })
    .catch((err) => {
      () => Alert.alert(err)
    })
  }

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={secondaryColor}/>
      <ScrollView>
        <View style={styles.block}>
          <TouchableOpacity style={styles.touchableGreen} onPress={() => onSelection(1)}>
            <Image source={require("../../assets/Images/sports.png")} style={styles.image}/>
            <Text style={styles.text}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableGreen} onPress={() => onSelection(2)}>
            <Image source={require("../../assets/Images/science.png")} style={styles.image}/>
            <Text style={styles.text}>Science</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.touchableRed} onPress={() => onSelection(3)}>
            <Image source={require("../../assets/Images/maths.png")} style={styles.image}/>
            <Text style={styles.text}>Maths</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.touchableYellow} onPress={() => Alert.alert('Course Coming soon!')}>
            <Image source={require("../../assets/Images/computer.png")} style={styles.image}/>
            <Text style={styles.text}>Computer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableYellow} onPress={() => Alert.alert('Course Coming soon!')}>
            <Image source={require("../../assets/Images/knowledge.png")} style={styles.image}/>
            <Text style={styles.text}>General Knowledge</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.touchableBlue} onPress={() => Alert.alert('Course Coming soon!')}>
            <Image source={require("../../assets/Images/arts.png")} style={styles.image}/>
            <Text style={styles.text}>Arts</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
