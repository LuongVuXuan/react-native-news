import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CategoryItem from '../components/categoryItem/CategoryItem';

const fakeData = [
  {
    CategoryId: '1',
    CategoryName: 'Tit1',
    CategoryLink: 'short1',
  },
  {
    CategoryId: '2',
    CategoryName: 'Tit2',
    CategoryLink: 'short2',
  },
  {
    CategoryId: '3',
    CategoryName: 'Tit3',
    CategoryLink: 'short3',
  },
];

fetch(
  'http://192.168.1.11:8080//getCategorieByPosition?position=TOP&culture=vi-VN&tokenKey=a',
)
  .then(response => response.json())
  .then(responseJson => {
    // console.log(responseJson);
    var data = responseJson
  })
  .catch(error => {
    console.error(error);
  });

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = { data: fakeData};
  }

  onPressHandler = item => {
    this.props.navigation.navigate('ArticleScreen', item);
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => {
            return (
              <CategoryItem
                title={item.CategoryName}
                shortDescription={item.CategoryName}
                id={item.CategoryId}
                onPress={this.onPressHandler.bind(this, item)}
              />
            );
          }}
          keyExtractor={item => item.CategoryId}
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
