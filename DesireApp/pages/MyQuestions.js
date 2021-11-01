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
  
`;


const ScrollView = styled.ScrollView`
  flex: 1;
  flex-diection: column;
  border: #999999;
`;

const RowBox = styled.View`
  border: #0000ff;
  width: 100%;
  height: 132px;

  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;

const Part = styled.TouchableOpacity`
  height: 132px;
  width: 132px;
  border: #a0a0a0;
  border-radius: 16px;
  margin-right: 5%;
  background: #ffffff;
  border: #d0d0d0;
`;



function MyQuestion(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>내가 한 질문</Title>
                <Glass><Image source={require('../constants/images/homepage/glasses.png')}/></Glass>
              </TitleView>

              <ScrollView>
                  <RowBox><Part></Part><Part></Part></RowBox>
                  <RowBox><Part></Part><Part></Part></RowBox>
                  <RowBox><Part></Part><Part></Part></RowBox>
                  <RowBox><Part></Part><Part></Part></RowBox>
                  <RowBox><Part></Part><Part></Part></RowBox>
                  <RowBox><Part></Part><Part></Part></RowBox>
              </ScrollView>

            </Contents>
        </Background>
      </Container>
    
    )
}



export default MyQuestion;

