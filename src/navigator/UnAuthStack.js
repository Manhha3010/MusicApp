import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../container/LoginScreen';
import WelCome from '../container/WelcomeScreen/Welcome';
import SignUpScreen from '../container/SignUpScreen';
import HomeScreen from '../container/HomeScreen';
import {MyTabs} from './HomeNavigator';
import SongDetailScreen from '../container/SongDetailScreen';
import React from 'react';
import {ListArtistScreen} from '../container/ListArtist';
import {ArtistDetailScreen} from '../container/ArtistDetailScreen';
import AlbumScreen from '../container/AlbumScreen';
import {AlbumDetailScreen} from '../container/AlbumDetailScreen';

const Stack = createNativeStackNavigator();
const UnAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelCome} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
