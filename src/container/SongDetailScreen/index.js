import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-ionicons';
import {colors} from '../../const/color';
import Slider from '@react-native-community/slider';
import {SetupTrackPlayService} from '../../TrackPlayer/services/index';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
import {getAudioTimeString} from '../../Ultils/Ultils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {onFavorite} from '../../components/Request/http';

const windowWidth = Dimensions.get('window').width;

export default function SongDetailScreen(props) {
  const [timePlay, setTimePlay] = useState(0);
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [index, setIndex] = useState(0);
  let isBuffering = true;
  const item = props.route.params.item.item;
  const list = props.route.params.listSong;
  const [save, setSave] = useState(false);
  console.log('jkasdkj list', list);

  const navigation = useNavigation();
  // console.log('ajsdjias', item.src);

  // useEffect(() => {
  //   const getCurrentTrack = async () => {
  //     const currentTrack = await TrackPlayer.getCurrentTrack();
  //     setIndex(currentTrack);
  //   };
  //   getCurrentTrack();
  //   console.log(' index la', index);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [playbackState]);

  const setupIfNecessary = async () => {
    // if app was relaunched and music was already playing, we don't setup again.
    try {
      await TrackPlayer.getCurrentTrack();
      addPodcast();
    } catch (err) {
      setupPlayer();
    }
  };
  const setupPlayer = async () => {
    await SetupTrackPlayService();
    addPodcast();
  };
  const handlePlay = async playState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      addPodcast();
    }
    console.log('satate', State);
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  };
  // console.log(trackData);
  const addPodcast = async () => {
    if (list) {
      await TrackPlayer.reset();
      // console.log(detail.audio);
      await TrackPlayer.add(list);
      const index1 = await TrackPlayer.getCurrentTrack();
      setIndex(index1);
      await TrackPlayer.play();
    }
  };

  useEffect(() => {
    setTimePlay(progress.position);
  }, [progress.position]);
  useEffect(() => {
    setTimeout(() => {
      setupIfNecessary();
    }, 500);
    return () => {
      TrackPlayer.pause();
      TrackPlayer.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const seek15 = async action => {
    let value;
    switch (action) {
      case '+':
        value = timePlay + 15;
        break;
      case '-':
        value = timePlay - 15;
        if (value < 0) {
          value = 0;
        }
        break;

      default:
        break;
    }
    await TrackPlayer.seekTo(value);
  };
  const next = async () => {
    await TrackPlayer.skipToNext();
    setIndex(index + 1);
    setSave(false);
  };
  const previous = async () => {
    await TrackPlayer.skipToPrevious();
    setIndex(index - 1);
  };

  const changeShowTime = value => {
    setTimePlay(value);
  };
  const changePositionTrack = value => {
    TrackPlayer.seekTo(value);
    console.log('value la ', value);
  };
  const showTime = getAudioTimeString(progress.duration - Math.round(timePlay));
  const showTimePlay = getAudioTimeString(Math.round(timePlay));
  if (showTimePlay === '00:00' && showTime === '00:00') {
    isBuffering = false;
  }
  if (Math.round(timePlay) === 30) {
    setTimePlay(0);
    setIndex(index + 1);
    setSave(false);
  }
  const handleFavorite = async () => {
    const id = list[index].id;
    try {
      const res = await onFavorite(id);
      setSave(true);
      console.log('res la ', res);
      if (res.status === 'success') {
        Alert.alert('Thành công', 'Đã thêm vào danh sách yêu thích', ['OK'], {
          cancelable: false,
        });
      }
    } catch (error) {
      console.log('first catch', error.response.data);
      Alert.alert(
        'Thất bại',
        'Bài hát đã có trong favorite',
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
      setSave(true);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
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
        <TouchableOpacity onPress={handleFavorite}>
          <MaterialCommunityIcons
            name={save ? 'heart-circle' : 'heart-circle-outline'}
            color={colors.primary}
            size={42}
            style={{paddingRight: 16}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Image
            source={{uri: list[index].artwork}}
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
            {list[index].title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '600',
              marginTop: 10,
            }}>
            {list[index].artist}
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

        <Slider
          style={{
            width: (windowWidth / 10) * 9,
            height: 40,
            alignSelf: 'center',
          }}
          value={timePlay}
          minimumValue={0}
          maximumValue={30}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#ccc"
          onSlidingComplete={changePositionTrack}
          onValueChange={changeShowTime}
          thumbStyle={{
            width: 10,
            height: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={styles.textTimePlay}>{showTimePlay}</Text>
          <Text style={styles.textTimePlay}>{showTime}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: (windowWidth / 10) * 8,
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={previous}>
          <MaterialCommunityIcons
            name={'skip-previous-circle'}
            color={colors.primary}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => seek15('-')}>
          <MaterialCommunityIcons
            name={'rewind-15'}
            color={colors.primary}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlay}>
          <MaterialCommunityIcons
            name={
              playbackState === State.Playing ? 'pause-circle' : 'play-circle'
            }
            color={colors.primary}
            size={68}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => seek15('+')}>
          <MaterialCommunityIcons
            name={'fast-forward-15'}
            color={colors.primary}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={next}>
          <MaterialCommunityIcons
            name={'skip-next-circle'}
            color={colors.primary}
            size={32}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textTimePlay: {
    color: '#000',
    paddingLeft: 10,
    marginTop: -8,
  },
});
