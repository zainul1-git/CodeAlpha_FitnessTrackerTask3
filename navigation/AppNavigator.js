import React from 'react';
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import QuizScreen from '../Screens/QuizScreen';
import ManageCardScreen from '../Screens/ManageCardScreen';

// const Stack = createNativeStackNavigator();
const Stack=createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#F8F9FA' },
        headerTintColor: '#2D3748',
        headerTitleStyle: { fontWeight: '700', fontSize: 18 },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🎯 Flashcard Dashboard' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: '🧠 Quiz Mode' }} />
      <Stack.Screen name="ManageCard" component={ManageCardScreen} options={{ title: '📝 Customize Card' }} />
    </Stack.Navigator>
  );
}