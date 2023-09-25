// Change this file! 

import React from 'react';
import { View, Text, Button } from 'react-native';

const LeaderboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john@example.com</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default LeaderboardScreen;
