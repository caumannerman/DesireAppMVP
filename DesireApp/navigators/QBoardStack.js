import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MentorBoard from '../pages/MentorBoard';
import MentorBoardDetail from '../pages/MentorBoardDetail'
import MentorReply from '../pages/MentorReply';

const QBStack = createNativeStackNavigator();

const QBoardStack = () => {
  return (
    <QBStack.Navigator screenOptions={{headerShown: false}}>
      <QBStack.Screen name="MentorBoard" component={MentorBoard} />
      <QBStack.Screen name="MentorBoardDetail" component={MentorBoardDetail} />
      <QBStack.Screen name="MentorReply" component={MentorReply } />
    </QBStack.Navigator>
  );
};

export default QBoardStack;