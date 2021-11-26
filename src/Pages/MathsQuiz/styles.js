import { Dimensions } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {blueColor, primaryColor, secondaryColor, whiteColor, yellowColor} from '../../Utils';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: whiteColor,
    flex: 1,
  },
  successFailure: {
    position: 'absolute',
    height: '150@vs',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
  },
  animation: {
    height: 50,
    width: 50,
  },
  qText: {
    fontSize: 18,
    textAlign: 'center',
    color: whiteColor,
    maxWidth: '90%',
    alignSelf: 'center',
  },
  items: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height/5,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fixBox: {
    backgroundColor: secondaryColor,
    height: Dimensions.get('screen').height/5 ,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  question: {
    flex: 1, 
    justifyContent:'center', 
    alignItems: 'center'
  },
  questionText: {
    textAlign:'center', 
    fontSize:22, 
    fontWeight:'bold'
  },
  flex: {
    flex: 1
  },
  bar: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default styles;
