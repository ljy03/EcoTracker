import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const tasks = [
  "Pick up 5 pieces of trash",
  "Do this",
  "And this",
  "Don't forget this",
  "Also this"
]
const HomeScreen = ({ navigation }) => {
  const [taskAmounts, setTaskAmounts] = useState([5, 4, 3, 2, 1]);

  const decreaseAmount = (index) => {
    if (taskAmounts[index] > 0) {
      const newAmounts = [...taskAmounts];
      newAmounts[index] -= 1;
      setTaskAmounts(newAmounts);
    }
  };

  global.points = 60; // Assuming global.points is defined elsewhere

  const getTreeImage = () => {
    if (points <= 10) {
      return "http://res.freestockphotos.biz/pictures/15/15924-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (points <= 30) {
      return "http://res.freestockphotos.biz/pictures/15/15919-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (points <= 60) {
      return "http://res.freestockphotos.biz/pictures/15/15922-illustration-of-a-small-cartoon-tree-pv.png";
    } else if (points <= 100) {
      return "http://res.freestockphotos.biz/pictures/15/15932-illustration-of-a-small-cartoon-tree-pv.png";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
        }}
        style={styles.pfp}
      ></Image>
      <Text style={styles.text}>HOME PAGE</Text>
      {taskAmounts.map((amount, index) => (
        <Text
          key={index}
          onPress={() => decreaseAmount(index)}
          style={styles.tasks}
        >
         #{index + 1} - {tasks[index]} {amount} time{amount > 1 ? "s" : ""}
        </Text>
      ))}
      <Text />

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
  },
  pfp: {
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  tasks: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});

export default HomeScreen;
