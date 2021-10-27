/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './pages/Intro';
import Start from './pages/Start';
import Join from './pages/Join';
import Profile from './pages/Profile';
import Home from './pages/Home';



const Stack = createNativeStackNavigator();

const App: () => Node = () => {
 

  return (
    <>
       
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Join" component={Join} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
