import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "tomato", paddingTop: 50 }}>
      <View>
        <TextInput
          placeholder='Write'
          style={{ borderColor: "black", borderWidth: 1 }}
        />
      </View>
      <View>
        <Button title='Home' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
