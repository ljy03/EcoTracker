// Imports
import React, {useReducer, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Task Bar Main Component
const TaskBar = ({ tasks, taskAmounts, onDecreaseAmount }) => {

  return (
    <View style={styles.container}>
      {/* Header for the Task Bar */}
      <Text style={styles.header}>Task Bar</Text>

      {/* Mapping over the list of tasks */}
      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onDecreaseAmount(index)} // When a task is pressed, call the onDecreaseAmount function
          style={styles.taskItem} // Styling for each task item
        >
          {/* Display the task name and the number of times it needs to be done */}
          <Text>
            #{index + 1} - {task} {taskAmounts[index]} time
            {taskAmounts[index] > 1 ? "s" : ""}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "white",
  },
});

export default TaskBar;
