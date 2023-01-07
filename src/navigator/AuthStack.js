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
import {useContext} from 'react';
import {AuthContext} from '../store/authContext';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const userInfor = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="SongDetailScreen"
        component={SongDetailScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ListArtist"
        component={ListArtistScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ArtistDetailScreen"
        component={ArtistDetailScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="AlbumDetailScreen"
        component={AlbumDetailScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
