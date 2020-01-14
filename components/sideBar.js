//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: '#dedede', width: 300, height: '100%'}}>
        <Text>{this.props.hihi}</Text>
        <View style={styles.head}></View>
        <View style={styles.body}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head:{
    flex: 1,
  },
  body:{
    flex: 3,
    backgroundColor: 'red',
  }
});

//make this component available to the app
export default SideBar;
