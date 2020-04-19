import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import {headerStyle} from '../Style';

const Header = props => {
  const {titleContainer, title, input, icon, button, buttonSize} = headerStyle;
  const getUrl = () => {
    props.getUrl();
    Keyboard.dismiss();
  };

  return (
    <View>
      <View style={titleContainer}>
        <Image style={icon} source={require('../../images/popcorn.png')} />
        <Text style={title}>Movie Searcher</Text>
      </View>
      <View style={titleContainer}>
        <TextInput
          onChangeText={text => props.searchPressed(text)}
          placeholder="Type Movie name to search"
          style={input}
          value={props.userInput}
        />
        <TouchableOpacity onPress={getUrl} style={button}>
          <Text style={buttonSize}>🔍</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
