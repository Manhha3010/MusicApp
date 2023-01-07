import TrackPlayer, {
  Capability,
  IOSCategory,
} from 'react-native-track-player';

export const setupIfNecessary = async (): Promise<boolean> => {
  let isSetup = false;
  try {
    // this method will only reject if player has not been setup yet
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    isSetup = true;
    await SetupTrackPlayService();
  } finally {
    return isSetup;
  }
};

export const SetupTrackPlayService = async () => {
  await TrackPlayer.setupPlayer({
    iosCategory: IOSCategory.Playback,
    minBuffer: 1800,
    maxBuffer: 3600,
    maxCacheSize: 20480,
  });
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });
};
