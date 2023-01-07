import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {fetchSongAll} from '../Request/http';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export function Song() {
  const [fetchDataSongs, setFetchDataSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchSongAll();
      setFetchDataSongs(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const renderItem = item => {
    const img = item.item.image;
    // console.log('item songs la', item);
    const handlePress = item => {
      console.log('item', item);
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
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View>
            <Image
              source={{
                uri: img,
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                marginHorizontal: 15,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 10,
                fontSize: 16,
                paddingTop: 12,
              }}>
              {item.item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            fontWeight: '700',
            paddingLeft: 20,
            marginTop: 16,
            fontSize: 20,
          }}>
          {fetchDataSongs.length} Songs
        </Text>
      )}
      <FlatList
        data={fetchDataSongs}
        key={Math.random()}
        renderItem={renderItem}
        initialNumToRender={7}
      />
    </View>
  );
}
