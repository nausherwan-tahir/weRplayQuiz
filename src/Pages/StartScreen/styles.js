import {ScaledSheet} from 'react-native-size-matters';
import { Dimensions } from 'react-native';
import {secondaryColor, primaryColor, whiteColor, greenColor, blackColor, yellowColor, blueColor} from '../../Utils';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
  },
  animation: {
    height: '100@vs',
    width: '100@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50
  },
  bigText: {
    fontSize: '42@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    color: greenColor,
  },
  centerElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  titleBox: {
    flex: 5,
    justifyContent:'center',
    alignItems:'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5,
  },
  buttonBox: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputField: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: greenColor,
    width: Dimensions.get('window').width/2,
    textAlign: 'center',
    color: blackColor
  },
  button: {
    margin :10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: greenColor,
    width: Dimensions.get('window').width/3,
  },
  buttonText: {
    color: whiteColor,
    textAlign:'center'
  },
  
});
