import {ScaledSheet} from 'react-native-size-matters';
import { Dimensions } from 'react-native';
import {primaryColor, blueColor} from '../../Utils';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: primaryColor,
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height
  },
  instruction: {
    margin: '5@ms',
    fontSize: '18@ms',
    textAlign: 'center',
    fontWeight:'bold',
    color: blueColor,
  },
  animation: {
    height: '270@vs',
    width: '270@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
