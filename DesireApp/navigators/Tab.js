import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hompage from '../pages/Homepage';
import Questions from '../pages/Questions';
import MyQuestions from '../pages/HMyQuestions';
import Chat from '../pages/Chat';

const Tabs = createBottomTabNavigator();

const Tabs = () => {
  return(
      <Tabs.Navigator>
          <Tabs.Screen name="Homepage" component={Homepage}/>
          <Tabs.Screen name="Questions" component={Questions}/>
          <Tabs.Screen name="MyQuestions" component={MyQuestions}/>
          <Tabs.Screen name="Chat" component={Chat}/>
      </Tabs.Navigator>
  );
}

export default Tabs;