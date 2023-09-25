import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { NavigationContainer } from "@react-navigation/native";

// Import all the pages here!
import HomeScreen from '../Pages/HomeScreen';
import LeaderboardScreen from '../Pages/LeaderboardScreen';
import QuestionHomeScreen from '../Pages/QuestionHomeScreen';
import QuestionScreen from '../Pages/QuestionScreen';
import { MapScreen } from '../Pages/MapScreen';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

// Don't foget to add it here as well!
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions = {({ route }) => ({
      headerShown: true,
      // Icons
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Quiz') {
            iconName = focused ? 'help-outline' : 'help-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'navigate-outline' : 'navigate-outline';
        } else if (route.name === 'Leaderboard') {
        iconName = focused ? 'podium-outline' : 'podium-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
        },

        // What color it is when pressed
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

    })}>
        {/* Name it whatever you want, component is the name that you put above */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name = "Map" component={MapScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Quiz" component={QuestionHomeScreen} />
      <Tab.Screen name="QuestionScreen" component={QuestionScreen} options={{
        tabBarButton: () => null,
        tabBarVisible: false, // if you don't want to see the tab bar
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
