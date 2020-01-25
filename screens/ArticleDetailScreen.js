import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

class ArticleDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch(
      'http://192.168.1.12:8080//getArticleDetail?id=' +
        this.props.navigation.getParam('ArticleId'),
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
    return <WebView source={{html: this.state.data.FullContent}} />;
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

export default ArticleDetailScreen;
