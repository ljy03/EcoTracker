import { Dimensions } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import { Button, Alert } from "react-native";

export default function QuestionScreen({navigation}) {
  return (
    <View style={styles.container}>
			<Text style={styles.header}>Quiz</Text>
			<Text>idk some sort of question ill come up with later</Text>
			<View style={[styles.buttonStyling]}>
			<TouchableHighlight style={styles.buttonStyling}>
        <Button
          color="green"
          onPress={() => navigation.navigate("Question Home Screen")}
          title="A) 500 feet"
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("Question Home Screen")}
          title="B) 64554 feet"
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("Question Home Screen")}
          title="C) 64543 feet"
				/>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonStyling}>
				<Button
          color="green"
          onPress={() => navigation.navigate("Question Home Screen")}
          title="D) 3234 feet"
        />
				</TouchableHighlight>
				
      </View>
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
  buttonStyling: {
    width: "80%",
		margin: "5%",
		alignItems: "center",
  },
});
