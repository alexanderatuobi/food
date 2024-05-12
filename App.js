// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

function navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen 
          name='Search'
          component={SearchScreen} 
          options={{ title: 'Business Search' }}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title:'Home' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigator;