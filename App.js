import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Status from './components/Status';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: false, // Start with no internet connection
    };
  }

  componentDidMount() {
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = (state) => {
    this.setState({ isConnected: state.isConnected });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={this.state.isConnected ? 'orange' : 'red'}
          barStyle={this.state.isConnected ? 'dark-content' : 'light-content'}
        />
        <Status isConnected={this.state.isConnected} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;