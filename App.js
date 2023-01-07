import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';

import WelCome from './src/container/WelcomeScreen/Welcome';
import LoginScreen from './src/container/LoginScreen';
import StackNavigator from './src/navigator/StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthProvider} from './src/store/authContext';
import {AuthContext} from './src/store/authContext';

const Stack = createNativeStackNavigator();

export default function App() {
  // TrackPlayer.registerPlaybackService(() => require('./service').default);

  Ionicons.loadFont().then();
  MaterialCommunityIcons.loadFont().then();

  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
