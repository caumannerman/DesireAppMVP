import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Questions from '../pages/Questions';
import MyQuestions from '../pages/MyQuestions';
import Chat from '../pages/Chat';
// 구현된 것 아님 임시 
const Tabs = createBottomTabNavigator();

const Tab = () => {
  return(
      <Tabs.Navigator>
      
          <Tabs.Screen name="Questions" component={Questions}/>
          <Tabs.Screen name="MyQuestions" component={MyQuestions}/>
          <Tabs.Screen name="Chat" component={Chat}/>
      </Tabs.Navigator>
  );
}

export default Tab;