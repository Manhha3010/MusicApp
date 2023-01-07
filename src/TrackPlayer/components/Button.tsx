import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImageCustomer from 'components/FastImageCustomer';
import { normalize } from 'utils/normalize';

export interface ButtonProps {
  isPlaying: boolean;
  onPress: () => void;
  type?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ isPlaying, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FastImageCustomer
        name={isPlaying ? 'pause-circle' : 'play-circle'}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD479',
    padding: 20,
  },
  secondary: {
    fontSize: 14,
    color: '#FFD479',
    padding: 22,
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
  },
});
