import React, { useState } from 'react';
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import QuestionHomeScreen from "./QuestionHomeScreen.js";
import { Button, Alert } from "react-native";
import BottomTabNavigator from "../Navigation/BottomTabNavigator.js";
import './HomeScreen.js'

export default function QuestionScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);

  async function questionAnswered(answerOfButtonPressed) {
    if (screens[currentPage]["correctAnswer"] === answerOfButtonPressed) {
      Alert.alert('Correct', 'That was correct!');
      global.points += 1;
    } else {
      Alert.alert('Incorrect', 'That was incorrect!');
    }
    if (currentPage === 4) {
      await new Promise(r=> setTimeout(r,1500));
      Alert.alert('Finished', 'Congrats, you finished the quiz!');
      global.completedQuiz = true;
      navigation.navigate("Quiz");
    } else {
      setCurrentPage(currentPage + 1);
    }
  }
  let screens = {
    1: {
      question: "How much waste does the US produce annually?",
      answer1: "268 million tons",
      answer2: "137 million tons",
      answer3: "323 million tons",
      answer4: "1.2 trillion tons",
      correctAnswer: "answer1",
    },
    2: {
      question: "How much plastic waste in the United States gets recycled?",
      answer1: "8%",
      answer2: "13%",
      answer3: "5%",
      answer4: "22%",
      correctAnswer: "answer3",
    },
    3: {
      question: "How long does it take styrofoam to decompose?",
      answer1: "5-10 years",
      answer2: "20-100 years",
      answer3: "100-400 years",
      answer4: "500+ years",
      correctAnswer: "answer4",
    },
    4: {
      question: "How many plastic bottles do Americans use every hour?",
      answer1: "2.5 million",
      answer2: "1.3 million",
      answer3: "0.8 million",
      answer4: "2.8 million",
      correctAnswer: "answer1",
    },
  }
  return (
    <View style={styles.container}>
			<Text style={styles.header}>Quiz</Text>
			<Text>{screens[currentPage]["question"]}</Text>
			
			<TouchableHighlight style={styles.buttonStyling}>
        <Button
          color="green"
          onPress={()  => {questionAnswered("answer1")}}
          title={screens[currentPage]["answer1"]}
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={()  => {questionAnswered("answer2")}}
          title={screens[currentPage]["answer2"]}
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={()  => {questionAnswered("answer3")}}
          title={screens[currentPage]["answer3"]}
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={()  => {questionAnswered("answer4")}}
          title={screens[currentPage]["answer4"]}
        />
        </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // margin: Dimensions.get("window").width / 7,
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  header: {
    fontSize: Dimensions.get("window").width / 10,
  },
  buttonStyling: {
    width: "80%",
		margin: Dimensions.get("window").height / 20,
		alignItems: "center",
  },
});
