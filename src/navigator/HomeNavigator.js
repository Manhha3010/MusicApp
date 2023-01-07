import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/HomeScreen';
import FavoriteScreen from '../container/FavoriteScreen';
import SettingScreen from '../container/PlaylistScreen';
import PlaylistScreen from '../container/SettingScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../const/color';
import React from 'react';
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: '',
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.primary : color}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: '',
          tabBarLabel: 'Favorite',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="heart-circle-outline"
              color={focused ? colors.primary : color}
              size={32}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="PlaylistScreen"
        component={PlaylistScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: '',
          tabBarLabel: 'Playlist',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="playlist-music"
              color={focused ? colors.primary : color}
              size={32}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },

          headerTitle: '',
          tabBarLabel: 'Setting',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="cog"
              color={focused ? colors.primary : color}
              size={32}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
