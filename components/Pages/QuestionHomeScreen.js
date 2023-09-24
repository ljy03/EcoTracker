import { Dimensions } from "react-native";
import "./QuestionScreen.js";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import './HomeScreen.js'
// import { useNavigation } from '@react-navigation/native';


import { Button, Alert } from "react-native";

export default function QuestionHomeScreen({ navigation }) {
  global.completedQuiz = false;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz</Text>
      <TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => {
            if (global.completedQuiz == false) {
              navigation.navigate("QuestionScreen")
            } else {
              Alert.alert("hmm...", "i think you may have already completed the quiz for today. try again tomrorrow")
            }
          }}
          title="Start Quiz"
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
  },
  header: {
    fontSize: Dimensions.get("window").width / 7,
  },
  verticallyCentered: {
    justifyContent: "center",
  },
  buttonStyling: {
    height: "20%",
    margin: 10,
  },
});
