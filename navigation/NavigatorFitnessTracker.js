import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../FitnessTrackerScreens/DashboardScreen';
import LogActivityScreen from '../FitnessTrackerScreens/LogActivityScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="LogActivity" component={LogActivityScreen} />
    </Stack.Navigator>
  );
}