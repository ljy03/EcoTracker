import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import all the pages here!
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

// Don't foget to add it here as well! 
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        {/* Name it whatever you want, component is the name that you put above */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Page 3" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
