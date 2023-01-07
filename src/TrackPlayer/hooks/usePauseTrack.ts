import { useCallback } from 'react';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';

export const usePauseTrack = () => {
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  return useCallback(async () => {
    if (isPlaying) {
      TrackPlayer.pause();
    }
  }, [isPlaying]);
};
