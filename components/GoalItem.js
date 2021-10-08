import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function GoalItem({ title, onDelete }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
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
