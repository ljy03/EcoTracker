import React, { useState, useEffect } from 'react';
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import QuestionHomeScreen from "./QuestionHomeScreen.js";
import { Button, Alert } from "react-native";
import BottomTabNavigator from "../Navigation/BottomTabNavigator.js";
import './HomeScreen.js'

export default function QuestionScreen({ navigation }) {
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

  const [localPoints, setLocalPoints] = useState(global.points);
  
  const addPoint = () => {
    global.points = global.points + 1;
    setLocalPoints(global.points);
  };

  useEffect(() => {
    setLocalPoints(global.points);
  }, [global.points]);

  const [counter, setCurrentCounter] = useState(0);
  const [array, setArray] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));
  let screens = {
    1: {
      question: "What percentage of marine debris found from surface waters to deep-sea sediments does plastic make up?",
      answer1: "80%",
      answer2: "87%",
      answer3: "75%",
      answer4: "91%",
      correctAnswer: "answer1",
    },
    2: {
      question: "What was the total bottle recycling rate for 2020?",
      answer1: "27.2%",
      answer2: "13.3%",
      answer3: "5%",
      answer4: "22.5%",
      correctAnswer: "answer1",
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
      question: "What percentage of textiles have the potential to be recycled or reused?",
      answer1: "97%",
      answer2: "91%",
      answer3: "95%",
      answer4: "81%",
      correctAnswer: "answer3",
    },
    5: {
      question: "Approximately how much of the food produced world wide is wasted and/or lost?",
      answer1: "40%",
      answer2: "30%",
      answer3: "50%",
      answer4: "45%",
      correctAnswer: "answer2",
    },
    6: {
      question: "Recycling cardboard only takes what percent of the energy required to make new cardboard?",
      answer1: "75%",
      answer2: "60%",
      answer3: "84%",
      answer4: "55%",
      correctAnswer: "answer1",
    },
    7: {
      question: "The total bottle recycling rate for 2019 was 28.7%. What was it in 2020?",
      answer1: "25.6%",
      answer2: "29.5%",
      answer3: "28.4%",
      answer4: "27.2%",
      correctAnswer: "answer4",
    },
    8: {
      question: "On average, how many pounds of waste per person goes into a landfill annually? ",
      answer1: "500 pounds",
      answer2: "1,500 pounds",
      answer3: "1,000 pounds",
      answer4: "2,500 pounds",
      correctAnswer: "answer3",
    },
  }

  async function questionAnswered(answerOfButtonPressed) {
    if (screens[array[counter]]["correctAnswer"] === answerOfButtonPressed) {
      Alert.alert('Correct', 'That was correct!');
      addPoint();
      console.log(global.points);
    } else {
      Alert.alert('Incorrect', 'That was incorrect!');
    }
    if (counter === 7) {
      await new Promise(r=> setTimeout(r,1000));
      Alert.alert('Finished', 'Congrats, you finished the quiz!');
      global.completedQuiz = true;
      navigation.navigate("Quiz");
    } else {
      setCurrentCounter(counter+1);
    }
  }

  return (
    <View style={styles.container}>
			<Text style={styles.header}>Quiz</Text>
			<Text>{screens[array[counter]]["question"]}</Text>
			
			<TouchableHighlight style={styles.buttonStyling}>
        <Button
          color="green"
          onPress={()  => {questionAnswered("answer1")}}
          title={screens[array[counter]]["answer1"]}
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={()  => {questionAnswered("answer2")}}
          title={screens[array[counter]]["answer2"]}
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={()  => {questionAnswered("answer3")}}
          title={screens[array[counter]]["answer3"]}
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={()  => {questionAnswered("answer4")}}
          title={screens[array[counter]]["answer4"]}
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
