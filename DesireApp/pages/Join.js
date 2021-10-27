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
  align-items: flex-start;
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

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const ImageView = styled.View`
  left: 10%;
  top: 45.43%
  height: 37.5%
`;
const Image = styled.Image`
  flex: 1;
`;

const TmpButton = styled.Button`
    
`;

function Join(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
                <TitleView>
                    <Title>회원가입</Title>
                    <SubTitle>디자이너만을 위한 든든한 맞춤 파트너</SubTitle>
                </TitleView>
                
                <ImageView>
                    <Image source={require('../constants/images/Intro.png')}/>
                </ImageView>
            </Contents>
            <TmpButton title="임시버튼" onPress={ () => {
            props.navigation.navigate( 'Profile')
          }}></TmpButton>

        </Background>
      </Container>
    
    )
}


export default Join;