import {View, Text, SafeAreaView, Image, VirtualizedList} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewSong from '../NewSong';
import Artist from '../Artist';
import MostPlay from '../MostPlay';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

function Suggest() {
  const getItemCount = data => {
    return 5;
  };
  const DATA = [];
  const getItem = (data, index) => {
    return {
      id: index,
      title: index + 1,
    };
  };
  const list = ({title}) => {
    switch (title) {
      case 1: {
        return <NewSong />;
      }
      case 2: {
        return <Artist />;
      }
      case 3: {
        return <MostPlay />;
      }
      default:
        break;
    }
  };
  return (
    <SafeAreaView>
      <View>
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 400}}
          data={DATA}
          initialNumToRender={5}
          renderItem={({item}) => list(item)}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default Suggest;
