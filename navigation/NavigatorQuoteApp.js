import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuoteScreen from '../QuoteAppScreens/QuoteScreen';

const Stack = createStackNavigator();

 function NavigatorQuoteApp() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Clean look ke liye screen header close rakha hai
      }}
    >
      <Stack.Screen name="Quote" component={QuoteScreen} />
    </Stack.Navigator>
  );
}
export default NavigatorQuoteApp;