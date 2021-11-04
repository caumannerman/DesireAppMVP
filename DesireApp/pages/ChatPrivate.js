import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Background = styled(LinearGradient)`
  flex: 1;  

`;
const Contents = styled.View`
  flex: 1;
  
  flex-direction: column;
  
`;

const TitleView = styled.View`
  flex-direction: row;
  
  top: 5%;
  left: 5%;
  align-items: center;
  height: 39px;
  width: 85%;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  align-items: center;
  justify-content: center;

`;

const Glass = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 39px;
`;

const ChatView = styled.View`
  width: 75%;

  background: #999999;
  border-radius: 24px;
  margin-bottom: 17px;
  margin-left: 5%;
  justify-content: center;
  
`;


const MyChatView = styled.View`
  width: 75%;
  
  background: #bb7dfc;
  border-radius: 24px;
  margin-left: 20%;
  margin-bottom: 17px;
  justify-content: center;

  
`;

const ChatText = styled.Text`
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 8%;
  margin-right:8%;
  margin-top: 10px;
  margin-bottom: 10px;
  
`;

function Chat(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
              

              
                <View style={{backgroundColor: '#e4ecf7', borderWidth: 1, borderColor:'#d0d0d0', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                                 >
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:2}}>가상 사용자</Text>
                    <Text style={{fontSize: 15, fontWeight: '500', color:'#a0a0a0', marginBottom:3}}>2MIN</Text>
                    
                  </View>

                  <TouchableOpacity style={{ width:'20%', height:'40%', borderRadius:7, backgroundColor:'#6486ff', marginLeft: '25%', alignItems:'center', justifyContent:'center'}}
                         onPress={()=>{props.navigation.goBack()}}>
                    <Text style={{color: '#ffffff', fontSize: 14, fontWeight:'600'}}>채팅종료</Text>
                  </TouchableOpacity>
                </View>




                <ScrollView style={{  }}>
                  <Text style={{textAlign: 'center', marginTop:30, marginBottom: 30}}>멘토님과 1대1 매칭을 통해 궁금한 것을 물어보세요.</Text>
       
                  <ChatView><ChatText>이런 부분은 제가 도와드릴게요.</ChatText></ChatView>
                  <ChatView><ChatText>캡쳐이미지 넣고 세부 스펙이나 더 궁금하신 점 피그마 링크도 같이 첨부해주시는 것도 좋을 것 같네요.</ChatText></ChatView>

                  <MyChatView><ChatText>답변 내용이 많은 도움이 되었습니다.</ChatText></MyChatView>

                </ScrollView>

            </Contents>
        </Background>
      </Container>
    
    )
}


export default Chat;