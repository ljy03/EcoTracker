import { Dimensions } from "react-native";
import "./QuestionScreen.js";
import { StyleSheet, Text, TouchableHighlight, SafeAreaView, View, ImageBackground } from "react-native";
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
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // 
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
    // width: "10%",
    marginTop: Dimensions.get("window").height/2.5,
    padding: Dimensions.get("window").width / 10,
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
