import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../pages/Homepage';
import Questions from '../pages/Questions';
import MyQuestions from '../pages/MyQuestions';
import Chat from '../pages/Chat';
import SignInStack from './SignInStack';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return(
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
          <Tabs.Screen name="SignInStack" component={SignInStack} options={{title: "회원가입(임시)" }}/>
          <Tabs.Screen name="Homepage" component={Homepage} options={{title: "홈" }}/>
          <Tabs.Screen name="Questions" component={Questions} options={{title: "질문하기"}}/>
          <Tabs.Screen name="MyQuestions" component={MyQuestions} options={{title: "내가 한 질문"}}/>
          <Tabs.Screen name="Chat" component={Chat} options={{title: "채팅"}}/>
      </Tabs.Navigator>
  );
}

export default Tab;