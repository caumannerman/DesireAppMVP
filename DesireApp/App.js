/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tab from './navigators/Tab';


const App: () => Node = () => {
 

  return (
    <>
       
      <NavigationContainer >
         <Tab/>
      </NavigationContainer>
    </>
  );
};

export default App;
