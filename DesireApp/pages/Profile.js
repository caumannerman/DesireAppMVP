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
  top: 10.43%
  
`;

const Title = styled.Text`
  font-weight:800;
  font-size: 38px;
  color: #000000;
  margin-bottom:1%;
  
`;



const ImageView = styled.View`
  left: 11.11%;
  top: 12.43%
  height: 96px;
  width: 77.88%;
  align-items: center;
`;
const ProfileImageView = styled.View`
  border: #d0d0d0;
  width: 96px;
  height: 96px;
  border-radius: 50px;
  background: #e3e3e3;
  align-items: center;
  justify-content: center;

`;
const Image = styled.Image`
  width: 80px;
  height: 80px;
  resizeMode: contain;
`;

const TextInputView = styled.View`
  top: 20%;
  
  flex-direction: column;
  width: 77.77%
  height: 55%
  align-items: center;
  margin-left: 11.11%;
  margin-right: 11.11%;
`;
const RowBox = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: stretch;
  margin-bottom: 10px;
  margin-top: 10px;
  
  
`;
const Text = styled.Text`
  height: 20px;
  width: 65px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
  margin-right: 10px;
  

`;
const TextInput = styled.TextInput`
  width : 75%;
  height: 40px;
  border: #D0D0D0;
 
  
  background: #ffffff;
`;
const CheckView = styled.ScrollView`
  
  height: 230px;
  width: 75%;
  border: #ff0000;
  background: #ffffff;
  border-radius: 2px;
  border: #d0d0d0;
  
  
`;
const Check = styled.TouchableOpacity`  
  height: 40px;
  width: 90%;
  justify-content: center;
 
  
`;
const CheckIcon = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  
  
  height: 40px;
  
  
  
`;


const Button = styled.TouchableOpacity`
  
  align-items: center;
  justify-content: center;
  background-color: #f34e4e;

  border-radius: 4px;
  height: 40px;
  width: 100%;
  margin-top: 20px;
`;



const ButtonText = styled.Text`
  
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  font-weight: bold;
  font-style: normal;
  text-align: center;  
`;


function Profile(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
                <TitleView>
                    <Title>프로필</Title>
                </TitleView>
                <ImageView>
                    <ProfileImageView>
                      <Image source={require('../constants/images/Start.png')}/>
                    </ProfileImageView>
                    
                </ImageView>
               
                <TextInputView>
                  <RowBox>
                    <Text>닉네임</Text>
                    <TextInput placeholder="입력"></TextInput>
                  </RowBox>

                  <RowBox>
                    <Text>디자인분야</Text>
                    <CheckView>
                        <RowBox>
                          <Check><CheckIcon>    UIUX</CheckIcon></Check>
                          <CheckIcon>✅</CheckIcon>
                        </RowBox>

                        <RowBox>
                          <Check><CheckIcon>    BIBX</CheckIcon></Check>
                          <CheckIcon>✅</CheckIcon>
                        </RowBox>

                        <RowBox>
                          <Check><CheckIcon>    제품디자인</CheckIcon></Check>
                          <CheckIcon>✅</CheckIcon>
                        </RowBox>

                        <RowBox>
                          <Check><CheckIcon>    시각디자인</CheckIcon></Check>
                          <CheckIcon>✅</CheckIcon>
                        </RowBox>
                        
                    </CheckView>
                  </RowBox>


                  <Button>
                    <ButtonText onPress={() => {
                      props.navigation.navigate("Homepage")
                  }}>시작하기</ButtonText>
                  </Button>

                </TextInputView>

               

                
                
                







            </Contents>
        </Background>
      </Container>
    
    )
}


export default Profile;