import {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import {colors} from '../../const/color';
import {fetchArtist} from '../Request/http';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Artist(props) {
  const [fetchDataArtist, setFetchDataArtist] = useState([]);
  const navigation = useNavigation();
  const renderItem = item => {
    const id = item.item._id;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ArtistDetailScreen', {id})}>
        <Image
          source={{
            uri: item.item.image,
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            marginHorizontal: 15,
            marginTop: 10,
          }}
        />
        <Text style={{fontWeight: '700', textAlign: 'center', marginTop: 10}}>
          {item.item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchArtist();
      setFetchDataArtist(data);
    }
    fetchData();
  }, []);
  return (
    <View style={{marginVertical: 24}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          paddingVertical: 10,
        }}>
        <Text style={{fontWeight: '700', fontSize: 20, left: 0}}>Artists</Text>
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={() => {
            navigation.navigate('ListArtist');
          }}>
          <Text
            style={{
              color: colors.primary,
              fontWeight: '700',
              fontSize: 16,
            }}></Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={fetchDataArtist}
        key={Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
