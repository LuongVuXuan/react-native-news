//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
class ArticleItem extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={{height: 36, width: 45}}
              source={require('../../images/logo-tamviet-01.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={{justifyContent: 'center', flex: 8}}>
            <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 17}}>
              {this.props.title}
            </Text>
            <Text numberOfLines={1}>{this.props.shortDescription}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    height: 50,
    flexDirection: 'row',
  },
  image: {
    marginRight: 15,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ArticleItem;
