import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../pages/Chat';
import ChatPrivate from '../pages/ChatPrivate';





const CStack = createNativeStackNavigator();

const ChatStack = () => {
  return(
    <CStack.Navigator screenOptions={{ headerShown: false }}>
      <CStack.Screen name="Chat" component={Chat} />
      <CStack.Screen name="ChatPrivate" component={ChatPrivate} />
    </CStack.Navigator>
  );
}

export default ChatStack;