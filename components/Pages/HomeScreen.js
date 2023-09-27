// Imports
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import TaskBar from "./Task/taskBar";
import ProgressBar from "./Task/progressBar";

// Edit this list of tasks!
const tasks = ["Pick up 5 pieces of trash", "Do this"];

const HomeScreen = ({ navigation }) => {
  // All the task amounts
  const [taskAmounts, setTaskAmounts] = useState([5, 4]); // Change this also if you add/remove a task!
  global.points = 60;

  const [localPoints, setLocalPoints] = useState(global.points);
  
  const addPoint = () => {
    global.points = global.points + 5;
    setLocalPoints(global.points);
  };

  useEffect(() => {
    setLocalPoints(global.points);
  }, [global.points]);

  // Decrease Amount Function
  const decreaseAmount = (index) => {
    if (taskAmounts[index] > 0) {
      // Checks if the amount of the task is 0
      const newAmounts = [...taskAmounts];
      newAmounts[index] -= 1;
      setTaskAmounts(newAmounts);
      addPoint();
      console.log(global.points);
    }
  };

  // Tree
  const getTreeImage = () => {
    if (localPoints <= 10) {
      return "http://res.freestockphotos.biz/pictures/15/15924-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (localPoints <= 30) {
      return "http://res.freestockphotos.biz/pictures/15/15919-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (localPoints <= 60) {
      return "http://res.freestockphotos.biz/pictures/15/15922-illustration-of-a-small-cartoon-tree-pv.png";
    } else {
      return "http://res.freestockphotos.biz/pictures/15/15932-illustration-of-a-small-cartoon-tree-pv.png";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-vector/detailed-jungle-background_23-2148953379.jpg",
        }}
        style={styles.background}
        resizeMode="cover"
      >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/64/64572.png", // Profile Picture
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
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: 'center',
    color: 'teal',
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
    marginTop: 40,
    marginRight: 5,
  },
  tasks: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
