import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './MapDetailsScreen';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();

function MapStack() {
  return (
    <Stack.Navigator initialRouteName="MapInitial">
      <Stack.Screen name="MapInitial" component={MapScreen} options={{animation: 'none', headerShown: false}}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{animation: 'none'}}/>
    </Stack.Navigator>
  );
}

export default MapStack