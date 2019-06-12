import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import Player from '~/services/player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => Player);
