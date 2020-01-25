import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import CategoryItem from '../components/categoryItem/CategoryItem';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch(
      'http://192.168.1.12:8080//getCategorieByPosition?position=TOP&culture=vi-VN&tokenKey=a',
    )
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);

        let objJson = JSON.parse(responseJson);

        this.setState({
          isLoading: false,
          data: objJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  onPressHandler = item => {
    this.props.navigation.navigate('ArticleScreen', item);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
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
