import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';

const url = 'http://api.tvmaze.com/search/shows?q=';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userInput: '',
      error: '',
    };
  }

  getUrl = async () => {
    let link = url + this.state.userInput;
    console.log(link);
    try {
      const response = await fetch(link);
      const data = await response.json();
      this.setState({
        data: data,
      });
      this.setState({
        userInput: '',
      });
      console.log({data});
    } catch (e) {
      this.setState({
        error: 'URL is wrong or Internet disconnected :(',
      });
    }
  };

  searchPressed = text => {
    this.setState({
      userInput: text,
      error: '',
    });
  };

  render() {
    const {data, error, userInput} = this.state;
    const {errorText, container1, container2} = styles;
    const movies =
      error !== '' ? (
        <Text style={errorText}>{error}</Text>
      ) : (
        data.map(item => <Movie data={item.show} key={item.show.id} />)
      );
    return (
      <SafeAreaView style={container1}>
        <Header
          searchPressed={this.searchPressed}
          getUrl={this.getUrl}
          userInput={userInput}
        />
        <ScrollView style={container2}>
          <View>{movies}</View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  errorText: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  },
  container1: {
    flex: 1,
  },
  container2: {
    flex: 3,
    backgroundColor: '#26456e',
  },
});
