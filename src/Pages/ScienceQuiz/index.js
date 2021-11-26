import React, {useState, useEffect,} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Alert,
  Image
} from 'react-native';
import {AppHeader, ButtonCard, Divider, Button} from '../../Component';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import { loadScore } from '../../redux/actions/GameActions';

const ScienceQuiz = (props) => {
  const {navigation} = props;
  const [score, setScore] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [success, setSuccess] = useState(null);
  const [highScore, setHighScore] = useState(useSelector(state => state.main.science));
  const TimeLimit = 10;
  const [time, setTime] = useState(TimeLimit);
  const [runTime, setRunTime] = useState(true);
  const [problem, setProblem] = useState(1);
  const [data, setData] = useState(useSelector(state => state.main.questions)); 
  const [pressedAnswer, setPressedAnswer] = useState(null);
  const correct = require('../../assets/Images/correct.png');
  const incorrect = require('../../assets/Images/incorrect.png');
  const {question, answer} = data[problem];
  let dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (runTime) {
        setTime((time) => time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [resetTimer]);

  useEffect(() => {
    if (time === 0) {
      timeout();
    }
  }, [time]);

  useFocusEffect(
    React.useCallback(() => {
      setProblem(1);
      setRunTime(true);
      setSuccess(null);  
      setTime(TimeLimit);  
    }, []),
  );

  const timeout = () => {
    if (problem === 10) {
      if(score > highScore)
      {
        dispatch(loadScore(score, 2))
        .then((response) => {
          if(response.type === 'SCORE_SUCCESS')
          {
            setRunTime(false);
            setTime(TimeLimit);
            setResetTimer((resetTimer) => !resetTimer);
            Alert.alert(
              "Result",
              "Check your result here",
              [
                { text: "OK", onPress: () => navigation.navigate('ResultScreen', {score : score})}
              ]
            );
          }
          else
          Alert.alert(
            "Error",
            "Leaderboard update error",
            [
              { text: "OK", onPress: () => navigation.navigate('ResultScreen', {score : score})}
            ]
          );
        })
        .catch((err) => {
          Alert.alert({Error : err});
        })
      }
      else {
        setRunTime(false);
        setTime(TimeLimit);
        setResetTimer((resetTimer) => !resetTimer);
        Alert.alert(
          "Result",
          "Check your result here",
          [
            { text: "OK", onPress: () => navigation.navigate('ResultScreen', {score : score})}
          ]
        );
      }
    } else {
      setProblem((problem) => problem + 1);
      setRunTime(true);
      setSuccess(null);     
      setTime(TimeLimit);
      setResetTimer((resetTimer) => !resetTimer);
      setPressedAnswer(null);
    }
  }

  const onAnswerSubmit = (id, status) => {
    setPressedAnswer(id);
    if (status) {
      setSuccess(true);
      setScore((score) => score + 1);
    } else {
      setSuccess(false);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AppHeader title={'weRplay'} subTitle={' Science '} />
      <View style={styles.fixBox}>
        <View style={styles.bar}>
          {runTime && (
            <View style={styles.flex}>
              <Text style={[styles.qText]}>Time</Text>
              <Text style={[styles.qText]}>{time}</Text>
            </View>
          )}
          <View style={styles.flex}>
            <Text style={[styles.qText]}>Score</Text>
            <Text style={[styles.qText]}>{score}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={[styles.qText]}>Questions</Text>
            <Text style={[styles.qText]}>{problem} | 10</Text>
          </View>
        </View>
      </View>
      <Divider small />
      <View style={styles.question}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.items}>
        <Divider large />
        <ButtonCard>
           <Button
            id={1}
            check={pressedAnswer}
            status={answer[1].status}
            onPress={() => onAnswerSubmit(1, answer[1].status)}>
            {answer[1].answer}
          </Button>
          <Button
            id={2}
            status={answer[2].status}
            check={pressedAnswer}
            onPress={() => onAnswerSubmit(2, answer[2].status)}>
            {answer[2].answer}
          </Button>
          <Button
            id={3}
            status={answer[3].status}
            check={pressedAnswer}
            onPress={() => onAnswerSubmit(3, answer[3].status)}>
            {answer[3].answer}
          </Button>
          <Button
            id={4}
            status={answer[4].status}
            check={pressedAnswer}
            onPress={() => onAnswerSubmit(4, answer[4].status)}>
            {answer[4].answer}
          </Button>
        </ButtonCard>
        <Divider large />
      </View>
      <Divider big />
      {success !== null && (
        <View style={styles.successFailure}>
          <Divider small/>
          <View>
          <Image source={success ? correct : incorrect} 
            style={styles.animation}/>
          </View>
          <Button onPress={() => timeout()}>Next</Button>
          <Divider medium/>
        </View>
      )}
    </View>
  );
};

export default ScienceQuiz;
