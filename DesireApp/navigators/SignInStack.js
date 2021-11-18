import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from '../pages/Start';
import Join from '../pages/Join';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Tab from './Tab';
const SIStack = createNativeStackNavigator();

const SignInStack = () => {
  return (
    <SIStack.Navigator screenOptions={{headerShown: false}}>
      <SIStack.Screen name="SignIn" component={SignIn} />
      <SIStack.Screen name="Start" component={Start} />
      <SIStack.Screen name="Join" component={Join} />
      <SIStack.Screen name="Profile" component={Profile} />
      <SIStack.Screen name="Tab" component={Tab} />
    </SIStack.Navigator>
  );
};

export default SignInStack;
