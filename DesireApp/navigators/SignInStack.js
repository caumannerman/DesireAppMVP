import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../pages/Intro';
import Start from '../pages/Start';
import Join from '../pages/Join';
import Profile from '../pages/Profile';


 //<SIStack.Screen name="Intro" component={Intro} />
const SIStack = createNativeStackNavigator();

const SignInStack = () => {
  return(
    <SIStack.Navigator screenOptions={{ headerShown: false }}>
     
      <SIStack.Screen name="Start" component={Start} />
      <SIStack.Screen name="Join" component={Join} />
      <SIStack.Screen name="Profile" component={Profile} />
    </SIStack.Navigator>
  );
}

export default SignInStack;