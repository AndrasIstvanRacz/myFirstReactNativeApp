import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/Home";
import Cards from "./screens/Cards";


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: ""}}/>
        <Stack.Screen name="Cards" component={Cards}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

