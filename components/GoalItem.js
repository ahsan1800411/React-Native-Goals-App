import React from "react";
import { View, StyleSheet, Text } from "react-native";

function GoalItem({ title }) {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
  },
});

export default GoalItem;
