import React,{useState, useEffect} from 'react';
import {View, Text, ImageBackground, Image, ScrollView, RefreshControl, TouchableOpacity} from 'react-native';
import {styles} from './styles';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider, Row, } from '../../Component';
import {useSelector, useDispatch} from 'react-redux';
let dispatch = useDispatch();

const Leaderboard = ({navigation}) => {
  const [state, setState] = useState(useSelector(state => state.main));
  const [scienceScore, setScienceScore] = useState(useSelector(state => state.main.science));
  const [sportsScore, setSportsScore] = useState(useSelector(state => state.main.sports));
  const [mathsScore, setMathsScore] = useState(useSelector(state => state.main.maths));
  console.log({CurrentState : state })
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ImageBackground source={require('../../assets/Images/cardBackground.png')} style={styles.background}>      
      <View style={styles.mainView}>
        <View style={styles.centerElement}>
          <View style={styles.animationButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
              { console.log("Maths Score - ",mathsScore) }
              <Image source={require("../../assets/Images/incorrect.png")}
              style={styles.animation}/>
            </TouchableOpacity>
          </View>
          <ScrollView 
          refreshControl={ 
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          <View style={styles.leaderboard}>
              <Text style={styles.bigText}>LEADERBOARD</Text>
              <Text style={styles.bigText}>__________</Text>
          </View>
          <Divider medium />
          <View style={styles.rows}>
            <Row column1={'Course'} column2={'Score'} status={1}/>
            <Row column1={'Sports'} column2={`${sportsScore}`} status={0}/>
            <Row column1={'Science'} column2={`${scienceScore}`} status={0}/>
            <Row column1={'Maths'} column2={`${mathsScore}`} status={0}/>
            <Row column1={'Computer'} column2={'0'} status={0}/>
            <Row column1={'G.K'} column2={'0'} status={0}/>
            <Row column1={'Arts'} column2={'0'} status={0}/>
          </View>
          </ScrollView>
        </View>
        <Text style={styles.instructions}>Scroll down to refresh data from server</Text>
      </View>
    </ImageBackground>
  );
};

export default Leaderboard;
