import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-ionicons';
import React, {useEffect, useState} from 'react';
import {
  fetchAlbumDetail,
  fetchArtistDetail,
} from '../../components/Request/http';
const windowWidth = Dimensions.get('window').width;
export function AlbumDetailScreen(props) {
  console.log('porpsss', props);
  const id = props.route.params.id;
  const navigation = useNavigation();
  const [dataFetch, setDataFetch] = useState();
  const [listSongShow, setListSong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAlbumDetail(id);
      setDataFetch(data);

      const list = [...data.songsAlbum];

      setListSong(list);
      console.log('list song', listSongShow);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = item => {
    const img = item.item.image;
    // console.log('item songs la', item);
    const handlePress = item => {
      console.log('item', item);
      const trackData = {
        url: item.item.src,
        title: item.item.title,
        artist: item.item.artist?.name,
        duration: 30,
        album: item.item.albumId,
        artwork: item.item.image,
        id: item.item._id,
      };
      let listSong = [];
      listSong = listSongShow.map(item => {
        return {
          url: item.src,
          title: item.title,
          artist: item.artist?.name,
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
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          ios="arrow-round-back"
          size={42}
          style={{paddingLeft: 16, fontWeight: '700'}}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={{uri: dataFetch?.image}}
          style={{
            width: (windowWidth / 10) * 8,
            height: (windowWidth / 10) * 8,
            borderRadius: 50,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20,
          }}>
          {dataFetch?.name}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600',
            marginTop: 10,
          }}>
          {dataFetch?.songsAmount} Songs
        </Text>
        <View
          style={{
            width: (windowWidth / 10) * 9,
            height: 1,
            backgroundColor: '#ccc',
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 8,
          }}
        />
      </View>
      <FlatList
        data={listSongShow}
        key={Math.random()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
