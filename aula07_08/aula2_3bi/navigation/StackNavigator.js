import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../screens/Inicio';
import Times from '../screens/Times';
import Sobre from '../screens/Sobre';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: '⚽ Futebol' }}
        />

        <Stack.Screen
          name="Times"
          component={Times}
          options={{ title: '🏆 Times' }}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: 'Sobre' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}