import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import {Text, Image} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Background = styled(LinearGradient)`
  flex: 1;  

`;
const Contents = styled.View`
  flex: 1;  
`;

const TitleView = styled.View`
  position: absolute;
  font-style: normal;
  left: 11.11%;
  top: 10.43%
  
`;

const Title = styled.Text`
  font-weight:800;
  font-size: 38px;
  line-height:46px;
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

const ImageView = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
  width: 90%;
  bottom: 3%;
  align-items: center;
`;

function Intro(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>

                <TitleView>
                    <Title>DESIRE</Title>
                    <SubTitle>디자이너만을 위한 든든한 맞춤 파트너</SubTitle>
                </TitleView>
                
                <ImageView onPress={ () => {
                   props.navigation.navigate( 'Start')}}>
                    <Image source={require('../constants/images/Intro.png')} style={{flex:1,resizeMode:'contain'}}/>
                </ImageView>
            </Contents>
            
        </Background>
      </Container>
    
    )
}


export default Intro;