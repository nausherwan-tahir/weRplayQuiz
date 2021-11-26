import React from 'react';
import {useWindowDimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen, Leaderboard} from '../../Pages';
import { CustomDrawer } from '../../Component';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
    drawerType={isLargeScreen ? 'permanent' : 'back'}
    drawerStyle={isLargeScreen ? null : { width: '100%' }}
    overlayColor="transparent"
    backBehavior= 'history' drawerType='front' hideStatusBar = 'true' statusBarAnimation='fade'
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{}}>
      <Drawer.Screen name="Quiz" options={{title: 'Quiz', headerTitle:'weRplay Quiz'}} component={HomeScreen} options={{
        drawerIcon: ({color}) => {<Ionicons name='home-outline' size={22} color={color}/>}
      }}/>
      <Drawer.Screen name="Leaderboard" component={Leaderboard} options={{
        drawerIcon: ({color}) => {<Ionicons name='home-outline' size={22} color={color}/>}
      }}/>
    </Drawer.Navigator>
  );
}
export {MyDrawer};