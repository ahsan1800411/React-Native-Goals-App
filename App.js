import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals &&
          courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 50,
  },
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
