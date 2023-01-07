import { useState, useEffect } from 'react';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
import type { Track } from 'react-native-track-player';

export const useCurrentTrack = (): Track | undefined => {
  const [index, setIndex] = useState<number | undefined>();
  const [track, setTrack] = useState<Track | undefined>();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async ({ nextTrack }) => {
    setIndex(nextTrack);
  });

  useEffect(() => {
    if (index === undefined) {
      return;
    }
    (async () => {
      const newTrack = await TrackPlayer.getTrack(index);
      setTrack(newTrack || undefined);
    })();
  }, [index]);

  return track;
};
