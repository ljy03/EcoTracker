import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import useTasks from '../Hooks/useTasks';

function DetailsScreen({ route, navigation }) {
  const { name, address, phone } = route.params;
  const { tasks, taskAmounts, decreaseAmount } = useTasks();

  const [hasPickedGarbage, setHasPickedGarbage] = useState(false);
  const [hasJogged, setHasJogged] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-vector/detailed-jungle-background_23-2148953379.jpg",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{address}</Text>
        <Text style={styles.text}>{phone}</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            if(!hasPickedGarbage){
              decreaseAmount(0);
              setHasPickedGarbage(true);
            }
          }}
          disabled={hasPickedGarbage}
        >
          <Text>{hasPickedGarbage ? '✅' : '❌'} Have you picked up garbage?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setHasJogged(!hasJogged)}>
          <Text>{hasJogged ? '✅' : '❌'} Have you jogged?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
            <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    text: {
      fontSize: 18,
      marginTop: 10,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    button: {
      marginVertical: 10,
      padding: 15,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent white
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
    },
    goBackButton: {
        backgroundColor: '#4CAF50', // or any color you prefer
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    goBackText: {
        color: 'white',
        fontSize: 16,
    },
  });

export default DetailsScreen;
