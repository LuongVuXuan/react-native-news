//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import ArticleItem from '../components/articleItem/ArticleItem';

// create a component
class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  onPressHandler = item => {
    this.props.navigation.navigate('ArticleDetailScreen', item);
  };

  componentDidMount() {
    return fetch(
      'http://192.168.1.12:8080//getArticlesByCategoryId?id=' +
        this.props.navigation.getParam('CategoryId'),
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
        <Text style={styles.text}>
          Các bài viết của {this.props.navigation.getParam('CategoryName')}
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => {
            return (
              <ArticleItem
                title={item.Title}
                shortDescription={item.ShortContent}
                id={item.ArticleId}
                onPress={this.onPressHandler.bind(this, item)}
              />
            );
          }}
          keyExtractor={item => item.ArticleId}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
//make this component available to the app
export default ArticleScreen;
