import { Dimensions } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import QuestionHomeScreen from "./QuestionHomeScreen.js";
import { Button, Alert } from "react-native";
import BottomTabNavigator from "../Navigation/BottomTabNavigator.js";

export default function QuestionScreen({navigation}) {
  return (
    <View style={styles.container}>
			<Text style={styles.header}>Quiz</Text>
			<Text>idk some sort of question ill come up with later</Text>
			
			<TouchableHighlight style={styles.buttonStyling}>
        <Button
          color="green"
          onPress={() => navigation.navigate("Quiz")}
          title="A) 500 feet"
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("Quiz")}
          title="B) 64554 feet"
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("Quiz")}
          title="C) 64543 feet"
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("Quiz")}
          title="D) 3234 feet"
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
