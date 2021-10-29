import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';


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
  width: 88%;
  top: 10.43%
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-weight:600;
  font-size: 28px;
  color: #000000;
  margin-bottom:1%;
  line-height: 41px;
  
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  color: #000000;
`;

const TextInputView = styled.View`
  top: 10%;
  
  flex-direction: column;
  width: 77.77%
  height: 40%
  align-items: center;
 
  margin-left: 11.11%;
  margin-right: 11.11%;
`;
const TextInput = styled.TextInput`
  width : 100%;
  height: 40px;
  border: #D0D0D0;
  margin-top: 30px;
  
  background: #ffffff;
`;

const TextView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #828282;
`;

const Button = styled.TouchableOpacity`
  
  align-items: center;
  justify-content: center;
  background-color: #f34e4e;
  margin-top: 30px;
  border-radius: 4px;
  height: 40px;
  width: 100%;
`;



const ButtonText = styled.Text`
  
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  font-weight: bold;
  font-style: normal;
  text-align: center;  
`;


const ImageView = styled.View`
  left: 15.2%;
  top: 20%;
  bottom: 5%
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



function Join(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>

                <TitleView>
                    <Title>회원가입</Title>
                </TitleView>
                

                <TextInputView>


                  <TextInput placeholder="이메일 주소">
                    
                  </TextInput>
                  <TextInput placeholder="비밀번호">
                    
                  </TextInput>
                  <TextView>
                    <Text>8자 이상,숫자포함</Text>
                    
                  </TextView>

                  <TextInput placeholder="비밀번호 확인">
                    
                    </TextInput>
                    
  

                  <Button onPress={() => {
                      props.navigation.navigate("Profile")
                  }}>
                      <ButtonText>가입하기</ButtonText>
                  </Button>

              
                </TextInputView>


                <ImageView>
                    <Image source={require('../constants/images/Start.png')}/>
                </ImageView>


            </Contents>
        </Background>
      </Container>
    
    )
}

export default Join;