import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Progress Bar Main Component
const ProgressBar = ({ tasks, taskAmounts }) => {
  // Calculate the total number of tasks
  const totalTasks = tasks.length;

  // Count the number of completed tasks by filtering taskAmounts where amount is 0
  const completedTasks = taskAmounts.filter((amount) => amount === 0).length;

  // Calculate the progress as a percentage
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Progress</Text>

      {/* Container for the progress bar */}
      <View style={styles.progressContainer}>
        {/* Progress bar itself with width based on the progress percentage */}
        <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
      </View>

      {/* Text displaying the number of completed tasks out of total tasks */}
      <Text style={styles.progressText}>
        {completedTasks}/{totalTasks} tasks completed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressContainer: {
    height: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
  },
  progressBar: {
    height: 20,
    backgroundColor: "green",
    borderRadius: 10,
  },
  progressText: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default ProgressBar;
