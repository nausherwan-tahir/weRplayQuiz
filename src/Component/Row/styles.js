import { Dimensions } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {blackColor, blueColor, primaryColor, secondaryColor, whiteColor, yellowColor} from '../../Utils';

export const styles = ScaledSheet.create({
  main: {
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    flexDirection: 'row',
    width: Dimensions.get('window').width/1.7
  },
  columnH: {
    flex: 1, 
    justifyContent:'center', 
    alignItems: 'center', 
    borderWidth:1, 
    padding: 10, 
    backgroundColor: blueColor
  },
  column: {
    flex: 1, 
    justifyContent:'center', 
    alignItems: 'center', 
    borderWidth:1, 
    padding: 10, 
    backgroundColor: whiteColor
  },
  bigText: {
    fontSize: '20@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Palatino',
    color: whiteColor,
  },
  instructions: {
    fontSize: '18@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Palatino',
    color: blackColor,
  },
});
