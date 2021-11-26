import React, {memo} from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './styles';

const Row = (props) => {
  return (
    <View style={styles.main}>
      <View style={props.status === 1 ? styles.columnH : styles.column}>
        {props.column1 && <Text style={props.status === 1 ? styles.bigText : styles.instructions}>{props.column1}</Text>}
      </View>
      <View style={props.status === 1 ? styles.columnH : styles.column}>
        {props.column2 && <Text style={props.status === 1 ? styles.bigText : styles.instructions}>{props.column2}</Text>}
      </View>    
    </View>
  );
};

export default memo(Row);
