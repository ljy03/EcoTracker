import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { NavigationContainer } from "@react-navigation/native";

// Import all the pages here!
import HomeScreen from '../Pages/HomeScreen';
import Chats from "../Pages/Chats";
import QuestionHomeScreen from '../Pages/QuestionHomeScreen';
import QuestionScreen from '../Pages/QuestionScreen';
import MapStack from '../Pages/MapNavigation';
import Profile from '../Pages/ProfileScreen';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

// Don't foget to add it here as well!
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions = {({ route }) => ({
      headerShown: false,
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
        } else if (route.name === 'Chat') {
          iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
        },

        // What color it is when pressed
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',

    })}>
        {/* Name it whatever you want, component is the name that you put above */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name = "Map" component={MapStack}/>
      <Tab.Screen name="Chat" component={Chats} />
      <Tab.Screen name="Quiz" component={QuestionHomeScreen} />
      <Tab.Screen name="QuestionScreen" component={QuestionScreen} options={{
        tabBarButton: () => null,
        tabBarVisible: false, // if you don't want to see the tab bar
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarButton: () => null,
        tabBarVisible: false, // if you don't want to see the tab bar
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
