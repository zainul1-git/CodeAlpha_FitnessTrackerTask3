import React from "react";

import HomeScreen from "../CollegeAlertScreens/HomeScreen";
import AlertDetailScreen from "../CollegeAlertScreens/AlertDetailScreen";

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator();

const CollegeAlertNavigation=()=>{
    return(
       // <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#007AFF', // College theme blue color
          }, 
          headerTintColor: '#ffffff', // Header text color white
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTitleAlign: 'center', // Title ko center mein karne ke liye
        }}
      >
        {/* 1. Home Screen Jahan Alerts ki List Hogi */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Campus Alerts' }} 
        />
        
        {/* 2. Detail Screen Jahan Alert ki Details Dikhein Gi */}
        <Stack.Screen 
          name="AlertDetail" 
          component={AlertDetailScreen} 
          options={{ title: 'Alert Details' }} 
        />
      </Stack.Navigator>
   // </NavigationContainer>
  );
    
 
}
 export default CollegeAlertNavigation;