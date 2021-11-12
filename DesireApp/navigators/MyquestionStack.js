import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyQuestions from '../pages/MyQuestions';
import Reply from '../pages/Reply';
import ReplyDetail from '../pages/ReplyDetail';

const MQStack = createNativeStackNavigator();

const MyquestionStack = () => {
  return (
    <MQStack.Navigator screenOptions={{headerShown: false}}>
      <MQStack.Screen name="MyQuestions" component={MyQuestions} />
      <MQStack.Screen name="Reply" component={Reply} />
      <MQStack.Screen name="ReplyDetail" component={ReplyDetail} />
    </MQStack.Navigator>
  );
};

export default MyquestionStack;
