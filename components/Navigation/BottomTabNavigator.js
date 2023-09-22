import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from "@react-navigation/native";

// Import all the pages here!
import HomeScreen from '../Pages/HomeScreen';
import ProfileScreen from '../Pages/ProfileScreen';
import QuestionHomeScreen from '../Pages/QuestionHomeScreen';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

// Don't foget to add it here as well! 
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        {/* Name it whatever you want, component is the name that you put above */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Quiz" component={QuestionHomeScreen} />
    </Tab.Navigator>
  );
};

// const Stack = createNativeStackNavigator();

// const Root = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Question Home Screen"
//           component={QuestionHomeScreen}
//           style={{ flex: 1 }}
//         />
//         <Stack.Screen
//           name="Question Screen"
//           component={QuestionScreen}
//           style={{ flex: 1 }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default BottomTabNavigator;
