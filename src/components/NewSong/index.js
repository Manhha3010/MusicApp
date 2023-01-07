import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../const/color';
import {fetchSongs} from '../Request/http';
import React from 'react';

export default function NewSong(props) {
  const navigation = useNavigation();

  const [fetchDataSongs, setFetchDataSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const renderItem = item => {
    const img = item.item.image;
    // console.log('item songs la', item);
    const handlePress = item => {
      const trackData = {
        url: item.item.src,
        title: item.item.title,
        artist: item.item.artist.name,
        duration: 30,
        album: item.item.albumId,
        artwork: item.item.image,
        id: item.item._id,
      };
      let listSong = [];
      listSong = fetchDataSongs.map(item => {
        return {
          url: item.src,
          title: item.title,
          artist: item.artist.name,
          duration: 30,
          album: item.albumId,
          artwork: item.image,
          id: item._id,
        };
      });
      listSong = listSong.sort(() => Math.random() - 0.5);
      listSong.unshift(trackData);
      navigation.navigate('SongDetailScreen', {item: item, listSong});
    };
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Image
          source={{
            uri: item.item.image,
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            marginHorizontal: 15,
            marginTop: 10,
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 10,
            width: 160,
          }}>
          {item.item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSongs();
      setFetchDataSongs(data);
      setLoading(false);
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
        <Text style={{fontWeight: '700', fontSize: 20, left: 0}}>NewSong</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.primary,
              fontWeight: '700',
              fontSize: 16,
            }}></Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : null}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={fetchDataSongs}
        key={Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
