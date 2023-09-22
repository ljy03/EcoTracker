import { Dimensions } from "react-native";
import QuestionScreen from "./QuestionScreen.js";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';


import { Button, Alert } from "react-native";

export default function QuestionHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz</Text>
      <Button
        color="green"
        style={{ height: 100, marginTop: 10 }}
        // onPress={() => navigation.navigate("Question Screen")}
        onPress={() => navigation.navigate('Profile')}
        
        options={{ headerShown: false }}
        title="Start Quiz"
      />
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
    width: "80%",
    height: "20%",
    margin: 10,
  },
});
