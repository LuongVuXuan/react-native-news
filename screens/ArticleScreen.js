//import liraries
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// create a component
class ArticleScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>Article {this.props.navigation.getParam('CategoryName')} Screen</Text>
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

//make this component available to the app
export default ArticleScreen;
