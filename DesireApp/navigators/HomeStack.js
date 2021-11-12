import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from '../pages/Homepage';
import Questions from '../pages/Questions';
import Reply from '../pages/Reply';
import ChatPrivate from '../pages/ChatPrivate';

// 멘토용 페이지
import MentorBoardDetail from '../pages/MentorBoardDatail';
import MentorBoard from '../pages/MentorBoard';
import MentorReply from '../pages/MentorReply';
import SignIn from '../pages/SignIn';

const HStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HStack.Navigator screenOptions={{headerShown: false}}>
      <HStack.Screen name="SignIn" component={SignIn} />
      <HStack.Screen name="Homepage" component={Homepage} />
      <HStack.Screen name="Questions" component={Questions} />
      <HStack.Screen name="Reply" component={Reply} />
      <HStack.Screen name="ChatPrivate" component={ChatPrivate} />

      <HStack.Screen name="MentorBoardDetail" component={MentorBoardDetail} />
      <HStack.Screen name="MentorBoard" component={MentorBoard} />
      <HStack.Screen name="MentorReply" component={MentorReply} />
    </HStack.Navigator>
  );
};

export default HomeStack;
