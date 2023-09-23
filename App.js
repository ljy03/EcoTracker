// Don't change this code!

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import BottomTabNavigator from './components/Navigation/BottomTabNavigator';
import QuestionScreen from './components/Pages/QuestionScreen.js';
import QuestionHomeScreen from './components/Pages/QuestionHomeScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="QuestionHomeScreen" component={QuestionHomeScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
