import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          height: 70,
          borderBottomWidth: 0.5,
          borderBottomColor: "grey"
        }}
      ></View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{ height: 70, borderTopWidth: 0.5, borderTopColor: "grey" }}
      ></View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
