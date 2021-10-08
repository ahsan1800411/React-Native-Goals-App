import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [text, setText] = useState("Hello World");
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title='Click' onPress={() => setText("Hello React Native!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
