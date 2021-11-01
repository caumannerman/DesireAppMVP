import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


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
  
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  width: 71px;
`;

const Alarm = styled.TouchableOpacity`
 
  height: 39px;
  width: 39px;
`;

const Image = styled.Image`
  resizeMode: contain;
  
`;

const QView = styled.View`

  top: 5%;
  left: 9%;
  
  width: 80%;
  height: 30%;
  flex-direction: column;


`;
const GreetText = styled.Text`
  font-size = 14px;
  font-weight: 500;
  color: #929292;
`;
const QBox = styled.View`
  witdh: 340px;
  height: 80%;
  
  flex-direction: column;
  border-radius: 16px;
  background: #ffffff;
  
  border: #7a7a7a;
  
`;
const QText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-left: 15%;
  top: 1.22%;
  color: #2c2c2c;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const QSubText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #5f5f5f;
  margin-left: 15px;

`;
const Button = styled.TouchableOpacity`
  background: #952bff;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  justify-content: center;
  
  
`;
const BText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  
`;
const Image2 = styled.Image`
  resizeMode: contain;
  width: 80px;
  height: 80px;
`;

const MyqChatView = styled.View`
  top: 5%;
  height: 25%;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;
const MyqChatTouch = styled.TouchableOpacity`
  
  width: 100%;
  height: 23px;
  flex-direction: row;

`;
const MyqChatText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  width: 30%;
  left: 40px;
 
`;
const QstView = styled.View`
  border: #ff0000;

`;

const RowView = styled.View`
  
  width: 100%;
  flex-direction: row;
  flex:1;
  justify-content: center;
  align-items: center;

`;

const Part = styled.TouchableOpacity`
  height: 80%;
  width: 30%;
  border: #a0a0a0;
  border-radius: 16px;
  margin-right: 5%;
  background: #000000;
`;





function Homepage(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>DESIRE</Title>
                <Alarm><Image source={require('../constants/images/homepage/notifications_24px.png')}/></Alarm>
              </TitleView>

              <QView>
                <GreetText>닉네임님, 환영합니다.</GreetText>
                <QBox>
                  <QText >디자인 일을 하며 생긴 어려움</QText>
                  <QSubText>일을하며 생긴 어려움 바로 멘토님에게! </QSubText>
                  <QSubText>마음 편하게 언제 어디든 질문하세요.</QSubText>
                  <RowView>
                  <Button>
                    <BText>질문하기</BText>
                  </Button>
                  <RowView >
                    <Image2 source={require('../constants/images/homepage/face.png')}/>
                  </RowView>
                  </RowView>
                </QBox>
              </QView>

              <MyqChatView>
                <MyqChatTouch><MyqChatText>내가 한 질문</MyqChatText><MyqChatText></MyqChatText></MyqChatTouch>

                <RowView> 
                  <Part></Part>
                  <Part></Part>
                  <Part></Part>
              
                </RowView>

              </MyqChatView>

              <MyqChatView>
                <MyqChatTouch><MyqChatText>1대1 채팅</MyqChatText><MyqChatText></MyqChatText></MyqChatTouch>

                <RowView>    
                  
                  <Part></Part>
                  <Part></Part>
                  <Part></Part>

                </RowView>
              </MyqChatView>
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Homepage;