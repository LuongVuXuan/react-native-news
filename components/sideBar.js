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
      <View style={{backgroundColor: '#dedede'}}>
        <Text>{this.props.hihi}</Text>
      </View>
    );
  }
}

//make this component available to the app
export default SideBar;
