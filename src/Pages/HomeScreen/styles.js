import { Dimensions } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor, primaryColor, greenColor, redColor, yellowColor, blueColor, whiteColor} from '../../Utils';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  block: {
    flex: 1,
    flexDirection:'row'
  },
  touchableGreen: {
    backgroundColor: greenColor, 
    flex:1, 
    padding:10, 
    width:Dimensions.get('window').width/2, 
    height:Dimensions.get('window').height/5, 
    margin:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  touchableRed: {
    backgroundColor: redColor, 
    flex:1, 
    padding:10, 
    width:Dimensions.get('window').width/2, 
    height:Dimensions.get('window').height/5, 
    margin:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  touchableYellow: {
    backgroundColor: yellowColor, 
    flex:1, 
    padding:10, 
    width:Dimensions.get('window').width/2, 
    height:Dimensions.get('window').height/5, 
    margin:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  touchableBlue: {
    backgroundColor: blueColor, 
    flex:1, 
    padding:10, 
    width:Dimensions.get('window').width/2, 
    height:Dimensions.get('window').height/5, 
    margin:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  image: {
    height:Dimensions.get('window').height/9, 
    width: Dimensions.get('window').width/4
  }, 
  text: {
    textAlign:'center', 
    color: whiteColor, 
    fontWeight:'bold'
  },
  flex: {
    flexDirection: 'row'
  }
});
