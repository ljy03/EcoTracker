import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from "@react-navigation/native";

// Import all the pages here!
import HomeScreen from '../Pages/HomeScreen';
import ProfileScreen from '../Pages/ProfileScreen';
import QuestionHomeScreen from '../Pages/QuestionHomeScreen';
import QuestionScreen from '../Pages/QuestionScreen';
import { MapScreen } from '../Pages/MapScreen';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

// Don't foget to add it here as well!
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        {/* Name it whatever you want, component is the name that you put above */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name = "Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Quiz" component={QuestionHomeScreen} />
      <Tab.Screen name="QuestionScreen" component={QuestionScreen} options={{
        tabBarButton: () => null,
        tabBarVisible: false, // if you don't want to see the tab bar
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
