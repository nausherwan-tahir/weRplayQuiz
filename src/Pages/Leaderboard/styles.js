import {ScaledSheet} from 'react-native-size-matters';
import { Dimensions } from 'react-native';
import {whiteColor, greenColor} from '../../Utils';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    justifyContent:'center', 
    alignItems: 'center',
  },
  animation: {
    height: '25@vs',
    width: '25@vs',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bigText: {
    fontSize: '24@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Palatino',
    color: whiteColor,
  },
  centerElement: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/1.8,
    borderWidth: 1,
    borderRadius: 15,
    padding: 40,
    backgroundColor: greenColor
  },
  background: {
    flex: 1, 
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height/5, 
    justifyContent:'center', 
    alignItems: 'center'
  },
  animationButton: {
    justifyContent:'flex-start', 
    alignItems:'flex-end', 
    width:Dimensions.get('window').width/1.3, 
    position:'absolute', 
    top: 0, 
    right: 0
  },
  leaderboard: {
    flex:1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  rows: {
    flex:2, 
    justifyContent:'center', 
    alignItems:'center'
  },
  instructions: {
    textAlign: 'center',
    marginTop: 10
  }
});
