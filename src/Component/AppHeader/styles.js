import {ScaledSheet} from 'react-native-size-matters';
import {blackColor, whiteColor} from '../../Utils';

export const styles = ScaledSheet.create({
  appHeader: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: blackColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '6@ms',
  },
  title: {
    fontSize: '16@ms',
    fontWeight: 'bold',
    color: whiteColor
  },
  subTitle: {
    fontSize: '12@ms',
    fontWeight: 'bold',
    color: whiteColor,
  }
});
