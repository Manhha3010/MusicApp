import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Dimensions,
} from 'react-native';
import {fetchFavorites} from '../../components/Request/http';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import {onDeleteFavorite} from '../../components/Request/http';

export default function FavoriteScreen() {
  const [fetchDataSongs, setFetchDataSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleFavorite = async id => {
    try {
      const res = await onDeleteFavorite(id);

      console.log('res la ', res);
      if (res.status === 'success') {
        Alert.alert('Thành công', 'Đã xoá khỏi danh sách yêu thích', ['OK'], {
          cancelable: false,
        });
      }
      const data = await fetchFavorites('manhha30102001@gmail.com', '123123');
      setFetchDataSongs(data);
    } catch (error) {
      console.log('first catch', error.response.data);
      Alert.alert(
        'Thất bại',
        'Có lỗi xảy ra',
        [
          {
            text: 'OK',
            style: 'destructive',
          },
        ],
        {
          cancelable: false,
        },
      );
    }
  };
  useEffect(() => {
    async function fetchData() {
      const data = await fetchFavorites('manhha30102001@gmail.com', '123123');
      setFetchDataSongs(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  console.log('rerender');
  const renderItem = item => {
    const img = item.item.image;
    // console.log('item songs la', item);
    const handlePress = item => {
      console.log('item', item);
      const trackData = {
        url: item.item.src,
        title: item.item.title,
        artist: '',
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
          artist: '',
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
      <View>
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
            <View style={{paddingRight: 120}}>
              <Text
                style={{
                  fontWeight: '700',
                  textAlign: 'left',
                  marginTop: 10,
                  fontSize: 16,
                  paddingTop: 12,
                  paddingRight: 50,
                }}
                numberOfLines={2}>
                {item.item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleFavorite(item.item._id);
          }}>
          <Icon
            name="close"
            style={{position: 'absolute', top: -80, right: 40}}
            size={40}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
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
        contentContainerStyle={{minHeight: 200}}
        key={Math.random()}
        renderItem={renderItem}
        style={{height: Dimensions.get('window').height}}
      />
    </View>
  );
}
