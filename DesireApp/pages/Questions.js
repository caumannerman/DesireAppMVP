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
  align-items: center;
  
`;

const TitleView = styled.View`

  margin-top: 7%;
  margin-left: 10%;

  height: 39px;
  width: 85%;
  
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  
`;


const TextInputView = styled.View`
  flex-direction: row;
  width: 100%
  height: 40px;
  
 

`;
const Text = styled.Text`
  height: 40px;
  width: 30%;
  border: #0000ff;
  background: #d0d0d0;
  
`;

const TextInput = styled.TextInput`
  width : 60%;
  height: 40px;
  border: #00DfD0;
  
  background: #ff00ff;
`;

const SS = styled.View`
  border: #00ff00;
  height: 40px;
  width: 100%;
`;

const RowView = styled.View`
  border: #00ff00;
  height: 40px;
  width: 100%;
  flex-dierection: row;
`;

const Category = styled.Text`

`;






const MainText = styled.TextInput`
  border: #0000ff;
  width: 100%;
  height: 35%;
`;

const File = styled.View`
  width: 100%;
  height: 15%;
  border: #ff0000;
`;

const Image = styled.Image`
  resizeMode: contain;
  
`;



const SendButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  border: #ff0000;
  background: #952bff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const SendText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;

`;

function Question(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>질문하기</Title>
              </TitleView>

              <RowView>
                <Text>제목</Text>
                <TextInput></TextInput>
              </RowView>

              
              <MainText></MainText>
              <File></File>
              




            
              <SendButton>
                <SendText>보내기</SendText>
              </SendButton>


            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Question;