import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {fetchArtist} from '../../components/Request/http';
import {useNavigation} from '@react-navigation/native';

export function ListArtistScreen() {
  const navigation = useNavigation();
  const [fetchDataSongs, setFetchDataSongs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchArtist();
      setFetchDataSongs(data);
    }
    fetchData();
  }, []);
  const renderItem = item => {
    const uri = item.item.image;
    const id = item.item._id;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ArtistDetailScreen', {id});
        }}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View>
            <Image
              source={{
                uri: uri,
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
              {item.item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={fetchDataSongs}
      key={Math.random()}
      renderItem={renderItem}
    />
  );
}
