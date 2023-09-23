import { Dimensions } from "react-native";
import QuestionScreen from "./QuestionScreen.js";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';


import { Button, Alert } from "react-native";

export default function QuestionHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz</Text>
      <TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("QuestionScreen")}
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
