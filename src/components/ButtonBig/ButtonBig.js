import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../const/color';
import React from 'react';

const ButtonBig = props => {
  return (
    <LinearGradient
      cstart={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.input, colors.primary]}
      style={styles.buttonContainer}>
      <Text style={styles.btnText}>{props.text}</Text>
    </LinearGradient>
  );
};

export default ButtonBig;
