// Imports
import React, { useReducer } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import usePoints from "../Hooks/usePoints";
import useTasks from '../Hooks/useTasks';
import ProgressBar from "./Task/progressBar";
import TaskBar from "./Task/taskBar";

// Edit this list of tasks!
const HomeScreen = ({ navigation }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const {localPoints, addPoint } = usePoints()
  const { tasks, taskAmounts, decreaseAmount } = useTasks();

  console.log(localPoints)
  console.log(taskAmounts)

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

  const profilePage = () => {
    navigation.navigate("Profile"); // Use the navigation prop to navigate to the "Profile" screen
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

      <Pressable onPress={profilePage}> 
        <Image
          source={{
            uri: "https://images-ext-2.discordapp.net/external/_0qEhnmWIMXS2wHbBVM4DZEEO0NmWPpXWAslBl09ius/https/play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj%3Dw240-h480-rw?width=480&height=480", // Profile Picture
          }}
          style={styles.pfp}
          
        ></Image>
      </Pressable>

      <Pressable onPress={forceUpdate} style={styles.updateButton}>
          <Text style={forceUpdate}>Update</Text>
      </Pressable>

      <View style={styles.pointsBox}>
          <Text style={styles.pointsText}>{localPoints} Points</Text>
      </View>

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
    borderRadius: 75,
  },
  updateButton: {
    position: 'absolute',
    top: 40,
    left: 5,
    backgroundColor: "#40B5AD", // or any color you prefer
    padding: 10,
    borderRadius: 25,
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pointsBox: {
    position: 'absolute', // This will allow you to position the box anywhere on the screen
    top: '13%', // This will position the box in the middle vertically
    left: '50%', // This will position the box in the middle horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // This will center the box based on its width and height
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // This will ensure the box is above other elements
    },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'teal',
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
