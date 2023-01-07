import { useCallback } from 'react';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';

export const useOnTogglePlayback = (item: any) => {
  const currentTrack: any = {
    id: item.id,
    url: item.audio,
    title: item.name,
    artist: item.description,
    artwork: item.type,
  };
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  return useCallback(
    async (position: number) => {
      let trackIndex = await TrackPlayer.getCurrentTrack();
      let trackObject: any =
        trackIndex != null ? await TrackPlayer.getTrack(trackIndex) : null;
      if (trackObject && trackObject.id === item.id) {
        if (isPlaying) {
          await TrackPlayer.pause();
        } else {
          // TrackPlayer.seekTo(position);
          await TrackPlayer.play();
        }
      } else {
        let tracks = await TrackPlayer.getQueue();
        let selectedIndex: any;
        let selectedTrack = tracks.find((track, index) => {
          if (track.id === item.id) {
            selectedIndex = index;
            return true;
          }
        });
        if (selectedTrack === undefined) {
          //not added then add to the queue
          if (isPlaying) {
            await TrackPlayer.pause();
            await TrackPlayer.seekTo(0);
            // await TrackPlayer.reset();
          }
          await TrackPlayer.reset();
          await TrackPlayer.add(currentTrack);
          tracks = await TrackPlayer.getQueue();
          selectedIndex = tracks.length - 1;
        } else {
          if (isPlaying) {
            await TrackPlayer.pause();
            await TrackPlayer.seekTo(0);
          }
        }
        await TrackPlayer.skip(selectedIndex);
        await TrackPlayer.seekTo(position);
        await TrackPlayer.play();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPlaying],
  );
};
