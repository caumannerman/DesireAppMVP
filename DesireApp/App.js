/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tab from './navigators/Tab';


const App = () => {

  useEffect(()=>{
    setTimeout(() => {
      SplashScreen.hide();
    },2000);
    
  },[]);

  return (
    <>
       
      <NavigationContainer >
         <Tab/>
      </NavigationContainer>
    </>
  );
};

export default App;
