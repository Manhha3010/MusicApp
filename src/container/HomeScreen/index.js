import {View, Text, SafeAreaView, Image, VirtualizedList} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FavoriteScreen from '../FavoriteScreen';
import Suggest from '../../components/Suggest';
import {Song} from '../../components/Song';
import React from 'react';
import {ListArtistScreen} from '../ListArtist';
import AlbumScreen from '../AlbumScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('../../assets/img/logo-login-screen.png')}
          style={{width: 48, height: 48, marginLeft: 30, marginTop: -30}}
        />
        <MaterialCommunityIcons name="search-circle" color={'#000'} size={32} />
      </View>
      {/* <NavBarNavigator /> */}
      <Tab.Navigator style={{flex: 1, minHeight: 1000}}>
        <Tab.Screen name="Suggest" component={Suggest} />
        <Tab.Screen name="Song" component={Song} />
        <Tab.Screen
          name="ArtistList"
          component={ListArtistScreen}
          options={{
            headerTitle: 'Artist',
            title: 'Artist',
          }}
        />
        <Tab.Screen
          name="AlbumScreen"
          component={AlbumScreen}
          options={{
            headerTitle: 'Album',
            title: 'Album',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default HomeScreen;
