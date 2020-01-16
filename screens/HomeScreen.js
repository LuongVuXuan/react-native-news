import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CategoryItem from '../components/categoryItem/CategoryItem';

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

class HomeScreen extends Component {
  onPressHandler = (item) => {
    this.props.navigation.navigate('ArticleScreen', item);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={fakeData}
          renderItem={({item}) => {
            return (
              <CategoryItem
                title={item.title}
                shortDescription={item.shortDescription}
                id={item.id}
                onPress={this.onPressHandler.bind(this, item)}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom: 0,
    backgroundColor: '#c3c3c3',
  },
});

export default HomeScreen;
