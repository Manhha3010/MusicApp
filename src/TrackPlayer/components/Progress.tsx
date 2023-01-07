import React from 'react';
import {StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';

export const Progress: React.FC = _index => {
  const progress = useProgress();
  return (
    <Slider
      style={styles.container}
      value={progress.position}
      minimumValue={0}
      maximumValue={progress.duration}
      thumbTintColor="#FFD479"
      minimumTrackTintColor="#FFD479"
      maximumTrackTintColor="#FFFFFF"
      onSlidingComplete={value => {
        TrackPlayer.seekTo(value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: '100%',
    flexDirection: 'row',
  },
  labelContainer: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: 'white',
    fontVariant: ['tabular-nums'],
  },
});
