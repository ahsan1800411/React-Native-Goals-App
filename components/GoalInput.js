import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.input}
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button title='Add' onPress={() => onAddGoal(enteredGoal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    width: "80%",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
