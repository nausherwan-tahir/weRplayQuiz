import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor} from '../../Utils';

export default Button = (props) => {
  const {onPress, children, id, check, status} = props;
  const styles = _styles(props);

  const success = check && status === true ? true : false;
  const failure = check && id === check && status === false ? true : false;

  return (
    <TouchableOpacity
      disabled={check}
      style={[
        styles.button,
        success && styles.success,
        failure && styles.failure,
      ]}
      onPress={onPress}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  );
};

const _styles = ({full}) => {
  return ScaledSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20@vs',
      borderRadius: '50@ms',
      paddingRight: '20@ms',
      paddingLeft: '20@ms',
      borderColor: secondaryColor,
      borderWidth: 2,
      width: Dimensions.get('screen').width/2.5,
      padding: '8@ms',
      margin: '5@ms',
      alignSelf: 'center',
    },
    txt: {
      color: secondaryColor,
      fontWeight: 'bold',
      fontSize: '18@ms',
      maxWidth: '100%',
      textAlign: 'center',
    },
    success: {
      backgroundColor: 'green',
    },
    failure: {
      backgroundColor: 'red',
    },
  });
};
