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

const Image = styled.Image`
  resizeMode: contain;
  flex: 1;
`;


const ScrollView = styled.ScrollView`
  flex: 1;
  flex-diection: column;
  border: #999999;
`;

const RowBox = styled.View`
  border: #d0d0d0;
  width: 100%;
  height: 82px;
  flex-direction: row;
`;

const Part = styled.TouchableOpacity`
  height: 82px;
  width: 75%;
  border: #0000ff;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;

`;

const ImageView = styled.View`
  height: 82px;
  width: 82px;
  border: #ff0000;
  justify-content: center;
  align-item: center;
`;

const Username = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000000;

`;

const TimeSend = styled.Text`
  font-size: 10px;
  font-weight: 300;
  text-align: center;
  color: #808080;
`;

const Firstline = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #808080;

`;


function Chat(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>1대1 채팅</Title>
                <Glass onPress={()=>{props.navigation.goBack()}}><Image source={require('../constants/images/homepage/glasses.png')}/></Glass>
              </TitleView>

              <ScrollView>
                  
              </ScrollView>

            </Contents>
        </Background>
      </Container>
    
    )
}


export default Chat;