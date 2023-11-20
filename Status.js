import React, { Component } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageOpacity: new Animated.Value(0),
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isConnected !== prevProps.isConnected) {
      this.handleConnectivityChange();
    }
  }

  animateMessageIn = () => {
    Animated.timing(this.state.messageOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  animateMessageOut = () => {
    Animated.timing(this.state.messageOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  handleConnectivityChange = () => {
    if (!this.props.isConnected) {
      this.animateMessageIn();
    } else {
      this.animateMessageOut();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.isConnected ? (
          <View style={styles.connectedContainer}>
            <Text style={styles.connectedText}>Connected</Text>
          </View>
        ) : (
          <Animated.View style={[styles.messageBubble, { opacity: this.state.messageOpacity }]}>
            <Text style={styles.messageText}>No network connection</Text>
          </Animated.View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBubble: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  messageText: {
    color: 'white',
  },
  connectedContainer: {
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 10,
  },
  connectedText: {
    color: 'white',
  },
});

export default Status;