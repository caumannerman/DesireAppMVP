import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
  border: #ff0000;
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
  letter-spacing: 0.02;
  font-style: normal;
  width: 71px;
`;

const Alarm = styled.TouchableOpacity`
  border: #00ff00;
  height: 39px;
  width: 39px;
`;



function Homepage(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
              <TitleView>
                <Title>DESIRE CHAT</Title>
                <Alarm></Alarm>
              </TitleView>
                

            </Contents>
        </Background>
      </Container>
    
    )
}


export default Homepage;