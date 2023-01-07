import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../const/color';
import React from 'react';

const ButtonSmall = props => {
  return (
    <LinearGradient
      cstart={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#0085FF', '#3b5998']}
      style={styles.buttonContainer}>
      <Text style={styles.btnText}>{props.text}</Text>
    </LinearGradient>
  );
};

export default ButtonSmall;
