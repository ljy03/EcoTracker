import { Dimensions } from "react-native";
import "./QuestionScreen.js";
import { StyleSheet, Text, TouchableHighlight, Pressable, SafeAreaView, View, ImageBackground } from "react-native";
import tree from '../../assets/tree.png';
import './HomeScreen.js';
// import { useNavigation } from '@react-navigation/native';


import { Button, Alert } from "react-native";

export default function QuestionHomeScreen({ navigation }) {
  global.completedQuiz = false;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={tree}
        style={styles.background}
        resizeMode="cover"
        
      >
        <Text style={styles.text}>QUIZ</Text>
      <Pressable onPress={() => {
            if (global.completedQuiz == false) {
              navigation.navigate("QuestionScreen")
            } else {
              Alert.alert("hmm...", "i think you may have already completed the quiz for today. try again tomrorrow")
            }
          }} style={styles.buttonStyling}>
          <Text>Start Quiz</Text>
      </Pressable>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: Dimensions.get("window").width / 7,
    alignItems: "center",
    justifyContent: "center",
  },
  verticallyCentered: {
    justifyContent: "center",
  },
  buttonStyling: {
    marginTop: Dimensions.get("window").height/2.5,
    backgroundColor: "#40B5AD",
    padding: 10,
    height: 50,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //fontSize: 35,
  },
  text: {
    margin: Dimensions.get("window").width / 6,
    padding: 10,
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: 'center',
    color: 'teal',
  },
  background: {
    width: "100%",
    height: "100%",
  },
});
