// Imports
import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import TaskBar from "./Task/taskBar"
import ProgressBar from "./Task/progressBar";

// Edit this list of tasks!
const tasks = [
  "Pick up 5 pieces of trash",
  "Do this",
  
  
];

const HomeScreen = ({ navigation }) => {
  // All the task amounts
  const [taskAmounts, setTaskAmounts] = useState([5, 4,]); // Change this also if you add/remove a task!

  // Decrease Amount Function
  const decreaseAmount = (index) => {
    if (taskAmounts[index] > 0) { // Checks if the amount of the task is 0
      const newAmounts = [...taskAmounts];
      newAmounts[index] -= 1;
      setTaskAmounts(newAmounts);
    }
  };

  global.points = 60;

  // Tree
  const getTreeImage = () => {
    if (points <= 10) {
      return "http://res.freestockphotos.biz/pictures/15/15924-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (points <= 30) {
      return "http://res.freestockphotos.biz/pictures/15/15919-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (points <= 60) {
      return "http://res.freestockphotos.biz/pictures/15/15922-illustration-of-a-small-cartoon-tree-pv.png";
    } else {
      return "http://res.freestockphotos.biz/pictures/15/15932-illustration-of-a-small-cartoon-tree-pv.png";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png", // Profile Picture
        }}
        style={styles.pfp}
      ></Image>
      
      {/* Header */}
      <Text style={styles.text}>HOME PAGE</Text>  

      {/* Task Bar */}
      <TaskBar
        tasks={tasks}
        taskAmounts={taskAmounts}
        onDecreaseAmount={decreaseAmount}
      />

      {/* Progress Bar */}
      <ProgressBar tasks={tasks} taskAmounts={taskAmounts} />

      {/* Tree Image */}
      <Image
        source={{
          uri: getTreeImage(),
        }}
        style={styles.image}
      ></Image>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "1%",
  },
  text: {
    padding: 10,
    fontSize: 50,
    fontWeight: "bold",
  },
  image: {
    height: "60%",
    width: "60%",
    alignSelf: "center",
    marginTop: -60,
  },
  pfp: {
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  tasks: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
});

export default HomeScreen;
