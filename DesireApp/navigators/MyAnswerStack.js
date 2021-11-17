import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyAnswers from '../pages/MyAnswers';
import MyAnswerDetail from '../pages/MyAnswerDetail';


const MAStack = createNativeStackNavigator();

const MyAnswerStack = () => {
  return (
    <MAStack.Navigator screenOptions={{headerShown: false}}>
      <MAStack.Screen name="MyAnswers" component={MyAnswers} />
      <MAStack.Screen name="MyAnswerDetail" component={MyAnswerDetail} />
    </MAStack.Navigator>
  );
};

export default MyAnswerStack;