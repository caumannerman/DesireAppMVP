import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Image} from 'react-native';
import HomeStack from './HomeStack';
import SignInStack from './SignInStack';
import QuestionStack from './QuestionStack';
import MyquestionStack from './MyquestionStack';
import ChatStack from './ChatStack';
import QBoardStack from './QBoardStack';
import MyAnswerStack from './MyAnswerStack';

import useAuth from '../services/useAuth';
import { getAuthHeader } from '../services/utils';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  const {isLoggedIn,getAuth} = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const [nowAccType, setNowAccType] = useState('');
  const styles = {
    view: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    chatStackView: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
    },
  };

  useEffect(() => {
    (async () => {
      const tempLoggedIn = await isLoggedIn();
      console.log('isLoggedIn: ', tempLoggedIn);
      setLoggedIn(tempLoggedIn);
    })();

    if(isLoggedIn){(async () => {
      const nowAuth = await getAuth();
      setNowAccType(nowAuth.accType);
    })();}
   
    
  }, []);

  return (
    (loggedIn===false)?<SignInStack/>:
     
    <Tabs.Navigator
      
      screenOptions={{
        tabBarHideOnKeyboard: true,        
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#ffffff'},
      }}
    >
      
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        
        options={{
          
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../constants/images/homepage/home.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                  tintColor: focused ? '#f89ccc' : '#952bff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f89ccc' : '#952bff',
                  height: 16,
                  fontSize: 10,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  marginTop: 3,
                }}>
                홈
              </Text>
            </View>
          ),
          unmountOnBlur: true 
        }}
      />
     {nowAccType==='ME'?<Tabs.Screen
        name="QuestionStack"
        component={QuestionStack}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../constants/images/homepage/glasses.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                  tintColor: focused ? '#f89ccc' : '#952bff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f89ccc' : '#952bff',
                  height: 16,
                  fontSize: 10,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  marginTop: 3,
                }}>
                질문하기
              </Text>
            </View>
          ),
          unmountOnBlur: true 
        }}
      />:
      <Tabs.Screen
        name="QBoardStack"
        component={QBoardStack}
        options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../constants/images/homepage/question.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                  tintColor: focused ? '#f89ccc' : '#952bff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f89ccc' : '#952bff',
                  height: 16,
                  fontSize: 10,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  marginTop: 3,
                }}>
                답변게시판
              </Text>
            </View>
          ),
          unmountOnBlur: true 
        }}
      />}
      
      {nowAccType==='ME'? <Tabs.Screen
        name="MyquestionStack"
        component={MyquestionStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../constants/images/homepage/face.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                  tintColor: focused ? '#f89ccc' : '#952bff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f89ccc' : '#952bff',
                  height: 16,
                  fontSize: 10,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  marginTop: 3,
                }}>
                내가 한 질문
              </Text>
            </View>
          ),
          unmountOnBlur: true 
        }}
      />:
       <Tabs.Screen
        name="MyAnswerStack"
        component={MyAnswerStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../constants/images/homepage/face.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                  tintColor: focused ? '#f89ccc' : '#952bff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f89ccc' : '#952bff',
                  height: 16,
                  fontSize: 10,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  marginTop: 3,
                }}>
                내가 한 답변
              </Text>
            </View>
          ),
          unmountOnBlur: true 
        }}
      />}
      <Tabs.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
              }}>
              <Image
                source={require('../constants/images/homepage/chat.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                  tintColor: focused ? '#f89ccc' : '#952bff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f89ccc' : '#952bff',
                  height: 16,
                  fontSize: 10,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  marginTop: 3,
                }}>
                1대1 채팅
              </Text>
            </View>
          ),
          unmountOnBlur: true 
        }}
      />
    </Tabs.Navigator>
  );
};

export default Tab;
