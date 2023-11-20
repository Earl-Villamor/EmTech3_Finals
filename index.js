import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Status />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "#fff"
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "#C83636",
    backgroundColor: "fff"
  }
});
