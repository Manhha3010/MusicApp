import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../container/HomeScreen';
import FavoriteScreen from '../container/FavoriteScreen';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

export function NavBarNavigator() {
  return (
    <Tab.Navigator style={{minHeight: 1000}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
