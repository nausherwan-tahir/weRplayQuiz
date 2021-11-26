import React, { useEffect, useState } from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import App from '../../Routes/StackNavigator';

export default SplashScreen = () => {
const [active, setActive] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const TimeLimit = 2;
  const [time, setTime] = useState(TimeLimit);
  const [runTime, setRunTime] = useState(true);

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
      setActive(true);
      setRunTime(false);
    }
  }, [time]);

  return (
    <>
    {active ? 
    <App />
    :
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <View style={styles.animationBox}>
          <Image source={require("../../assets/Images/logo.png")} 
            style={styles.animation}/>
          <Text style={styles.instruction}>
            {"PLAY & LET PLAY"}
          </Text>
        </View>
      </View>
    </View>
    }
    </>
  );
};