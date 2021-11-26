import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StartScreen,
  ResultScreen,
  ScienceQuiz,
  MathsQuiz,
  HomeScreen,
  Leaderboard,
  SportsQuiz
} from '../../Pages';
import { MyDrawer } from '../DrawerNavigator';
import SplashScreen from 'react-native-splash-screen';

export default stackNavigator = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} />
        <Stack.Screen options={{title : "", headerShown:false}} name="MainPage" component={MyDrawer}/>
        <Stack.Screen name="ResultScreen" options={{title : ""}} component={ResultScreen} />
        <Stack.Screen name="ScienceQuiz" options={{title : "", headerShown:false}} component={ScienceQuiz}/>
        <Stack.Screen name="SportsQuiz" options={{title : "", headerShown:false}} component={SportsQuiz}/>
        <Stack.Screen name="MathsQuiz" options={{title : "", headerShown:false}} component={MathsQuiz}/>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="HighScore" options={{title : ""}} component={Leaderboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
