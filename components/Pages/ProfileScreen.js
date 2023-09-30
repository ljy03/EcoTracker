// Imports
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";

// Main Profile Function
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false); // save and edit
  const [name, setName] = useState("smathwizard"); //name
  const [dateJoined, setDateJoined] = useState("January 1, 2023"); // date joined
  const [birthdate, setBirthdate] = useState("February 30, 2000"); // birth day

  const handleSave = () => {
    // Can put in stuff here to save it, for now I'm just going to change the button to edit
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{
          uri: "https://images-ext-2.discordapp.net/external/_0qEhnmWIMXS2wHbBVM4DZEEO0NmWPpXWAslBl09ius/https/play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj%3Dw240-h480-rw?width=480&height=480", // Replace with the URL of the user's profile image
        }}
        style={styles.profileImage}
      />

      <Text style={styles.label}>Name:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      ) : (
        <Text style={styles.text}>{name}</Text>
      )}
      <Text style={styles.label}>Birthdate:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={(text) => setBirthdate(text)}
        />
      ) : (
        <Text style={styles.text}>{birthdate}</Text>
      )}
      <Text style={styles.label}>Date Joined:</Text>
      <Text style={styles.text}>{dateJoined}</Text>
      
      {isEditing ? (
        <Button
          title="Save"
          onPress={handleSave}
          color="#4CAF50"
          style={{ fontSize: 50 }}
        /> // Green Save button
      ) : (
        <Button
          title="Edit"
          onPress={() => setIsEditing(true)}
          color="#4CAF50"
          style={{ fontSize: 30 }}
        /> // Green Edit button
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E0F2F1", // Light green background color
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 100,
  },
  label: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    color: "#4CAF50", // Green label text color
  },
  text: {
    fontSize: 30,
    marginTop: 10,
    color: "#333", // Text color
  },
  input: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "#4CAF50", // Green border color
    padding: 5,
    marginTop: 10,
    width: 200, // Adjust the width as needed
  },
});

export default Profile;
