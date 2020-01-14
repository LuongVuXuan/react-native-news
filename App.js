/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import DrawerExample from './views/drawerExample';
import SideBar from './components/sideBar';

const App: () => React$Node = () => {
  const abcxyz = () => {return 'muahahha'}

  

  return (
    <View>
      <SideBar hihi = {abcxyz()}/>
    </View>
  );
};

export default App;
