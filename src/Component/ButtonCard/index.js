import React from 'react';
import {Dimensions, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const ButtonCard = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default ButtonCard;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});