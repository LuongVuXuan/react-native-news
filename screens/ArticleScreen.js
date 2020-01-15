//import liraries
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// create a component
class ArticleScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Article Screen</Text>
        <Button
          title="Go to Article... again"
          //   onPress={() => navigation.push('ArticleScreen')}
        />
        <Button
          title="Go to Home"
          //   onPress={() => navigation.navigate('HomePage')}
        />
        <Button
          title="Go backkkkkklllllll"
          //   onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

//make this component available to the app
export default ArticleScreen;
