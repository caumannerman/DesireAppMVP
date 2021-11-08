import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';




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
  font-style: normal;
  left: 11.11%;
  top: 10.43%
  
`;

const Title = styled.Text`
  font-weight:800;
  font-size: 8px;
  color: #000000;
  margin-bottom:1%;
  
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  color: #000000;
`;

const ButtonView = styled.View`
  top: 30%;
  
  flex-direction: row;
  width: 77.77%
  height: 17%
  align-items: center;
  
  margin-left: 11.11%;
  margin-right: 11.11%;
  margin-top: 5%;
`;

const Button = styled.TouchableOpacity`
  
  height: 100%;
  width: 45%;
  
  align-items: center;
  background-color: #ffffff;

  margin-right: 10%;
  border-radius: 25px;
  

`;

const ButtonText = styled.Text`

  font-size: 30px;
  font-weight: 500;
  color: #6486ff;
  font-weight: bold;
  font-style: normal;
  justify-content: center;
  top: 30%;
  
`;

const ButtonText2 = styled.Text`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  color: #898989;
  justify-content: center;
  align-items: center;
  top: 40%;
  
`;
const ImageView = styled.View`
  left: 15.2%;
  top: 38%;
  bottom: 8%
  height: 37.5%
  
  width: 69.7%;
  height: 30.7%;
  justify-content: center;
  align-items: center;

`;
const Image = styled.Image`
  flex: 1;
  resizeMode: contain;
  
`;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


function Start(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>

                <TitleView>
                    <Title>시작해볼까요?</Title>
                    <SubTitle>멘티와 멘토 중 하나를 선택해주세요</SubTitle>
                </TitleView>
                

                <ButtonView>
                  <Button onPress={ () => {props.navigation.navigate( 'Join')}} >
                      <ButtonText>멘티</ButtonText>
                      <ButtonText2>질문자로 가입</ButtonText2>
                  </Button >
                    <Button onPress={ () => {props.navigation.navigate( 'Join')}}>
                      <ButtonText>멘토</ButtonText>
                      <ButtonText2>답변자로 가입</ButtonText2>
                    </Button>
                </ButtonView>


                <ImageView>
                    <Image source={require('../constants/images/Start.png')}/>
                </ImageView>


            </Contents>
        </Background>
      </Container>
    
    )
}


export default Start;