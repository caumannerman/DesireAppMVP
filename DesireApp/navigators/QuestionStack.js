import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Questions from '../pages/Questions';

const QStack = createNativeStackNavigator();

const QuestionStack = () => {
  return (
    <QStack.Navigator screenOptions={{headerShown: false}}>
      <QStack.Screen name="Questions" component={Questions} />
    </QStack.Navigator>
  );
};

export default QuestionStack;
