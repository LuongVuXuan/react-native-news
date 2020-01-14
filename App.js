/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import CategoryItem from './components/categoryItem/categoryItem';
// import DrawerExample from './views/drawerExample';
// import SideBar from './components/sideBar';

const fakeData = [
  {
    id: '1',
    title: 'Tit1',
    shortDescription: 'short1',
  },
  {
    id: '2',
    title: 'Tit2',
    shortDescription: 'short2',
  },
  {
    id: '3',
    title: 'Tit3',
    shortDescription: 'short3',
  },
  {
    id: '4',
    title: 'Tit4',
    shortDescription: 'short4',
  },
  {
    id: '5',
    title: 'Tit5',
    shortDescription: 'short5',
  },
];

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={({item}) => {
          return (
            <CategoryItem
              title={item.title}
              shortDescription={item.shortDescription}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom: 0,
    // backgroundColor: 'yellow',
  },
});

export default App;
