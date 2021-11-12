import React,{useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image} from 'react-native';
import HomeStack from './HomeStack';
import SignInStack from './SignInStack';
import QuestionStack from './QuestionStack';
import MyquestionStack from './MyquestionStack';
import ChatStack from './ChatStack';


const Tabs = createBottomTabNavigator();

const Tab = () => {
  return(
    
      <Tabs.Navigator screenOptions={{ headerShown: false, "tabBarShowLabel":false, "tabBarStyle":{backgroundColor:'#ffffff', borderRadius:10} }}  >
          <Tabs.Screen name="SignInStack" component={SignInStack} options={{ tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
              <Image
                 source={require('../constants/images/homepage/home.png')}
                 resizeMode='contain'
                 style={{
                   width:24,
                   height:24,
                   marginTop: 5,
                   tintColor: focused? '#f89ccc' : '#952bff', 
                 }}
              />
            <Text style={{color: focused? '#f89ccc' : '#952bff', height: 16,fontSize: 12, textAlign: 'center', fontWeight:'normal'}}>가입하기</Text>
            </View>
          )}}/>
          <Tabs.Screen name="HomeStack" component={HomeStack} options={{ tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                 source={require('../constants/images/homepage/home.png')}
                 resizeMode='contain'
                 style={{
                   width:24,
                   height:24,
                   marginTop: 5,
                   tintColor: focused? '#f89ccc' : '#952bff', 
                 }}
              />
             <Text style={{color: focused? '#f89ccc' : '#952bff', height: 16,fontSize: 12, textAlign: 'center', fontWeight:'normal'}}>홈</Text>
            </View>
          )}}/>
          <Tabs.Screen name="QuestionStack" component={QuestionStack} options={{ tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                 source={require('../constants/images/homepage/glasses.png')}
                 resizeMode='contain'
                 style={{
                   width:24,
                   height:24,
                   marginTop: 5,
                   tintColor: focused? '#f89ccc' : '#952bff'
                 }}
              />
             <Text style={{color: focused? '#f89ccc' : '#952bff', height: 16,fontSize: 12, textAlign: 'center', fontWeight:'normal'}}>질문하기</Text>
            </View>
          )}}/>
          <Tabs.Screen name="MyquestionStack" component={MyquestionStack} options={{ tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                 source={require('../constants/images/homepage/question.png')}
                 resizeMode='contain'
                 style={{
                   width:24,
                   height:24,
                   marginTop: 5,
                   tintColor: focused? '#f89ccc' : '#952bff', 
        
                 }}
              />
             <Text style={{color: focused? '#f89ccc' : '#952bff', height: 16,fontSize: 12, textAlign: 'center', fontWeight:'normal'}}>내가 한 질문</Text>
            </View>
          )}}/>
          <Tabs.Screen name="ChatStack" component={ChatStack} options={{ tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', height: 48}}>
              <Image
                 source={require('../constants/images/homepage/chat.png')}
                 resizeMode='contain'
                 style={{
                   width:24,
                   height:24,
                   marginTop: 5,
                   tintColor: focused? '#f89ccc' : '#952bff', 
            
                 }}
              />
             <Text style={{color: focused? '#f89ccc' : '#952bff', height: 16,fontSize: 12, textAlign: 'center', fontWeight:'normal'}}>1대1 채팅</Text>
            </View>
          )}}/>
      </Tabs.Navigator>
  );
}

export default Tab;