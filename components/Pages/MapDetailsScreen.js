import React, { useState }  from 'react';
import { Button, Linking, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

function DetailsScreen({ route }) {
  const { name, address, phone} = route.params;

  const [hasPickedGarbage, setHasPickedGarbage] = useState(false);
  const [hasJogged, setHasJogged] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ marginTop: 10 }}>{address}</Text>
      <Text style={{ marginTop: 10 }}>{phone}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setHasPickedGarbage(!hasPickedGarbage)}>
        <Text>{hasPickedGarbage ? '✅' : '❌'} Have you picked up garbage?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setHasJogged(!hasJogged)}>
        <Text>{hasJogged ? '✅' : '❌'} Have you jogged?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      margin: 10,
      padding: 15,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
    },
  });
  

export default DetailsScreen;