import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../pages/Homepage';
import Questions from '../pages/Questions';
import Reply from '../pages/Reply';
import ChatPrivate from '../pages/ChatPrivate';


const HStack = createNativeStackNavigator();

const HomeStack = () => {
  return(
      <HStack.Navigator screenOptions={{ headerShown: false }}>
          <HStack.Screen name="Homepage" component={Homepage}/>
          <HStack.Screen name="Questions" component={Questions}/>
          <HStack.Screen name="Reply" component={Reply}/>
          <HStack.Screen name="ChatPrivate" component={ChatPrivate}/>
      </HStack.Navigator>
  );
}

export default HomeStack;