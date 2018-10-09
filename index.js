/** @format */

import {AppRegistry} from 'react-native';
import RootView from './RootView';
import LifecycleComponent from './LifecycleComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LifecycleComponent);
