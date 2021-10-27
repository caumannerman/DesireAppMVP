import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Text = styled.Text`
   
`;

const Container = styled.SafeAreaView`
  flex: 1;
 
`;
const Background = styled(LinearGradient)`
  flex: 1;
  

  
`;
function Intro(){
    return(
        <>
          <Container>
            <Background colors={['#ffffff','#f9ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
                <Text >
                    Sign in with Facebook
                </Text>
                </LinearGradient>
            </Background>
          </Container>
        </>
    )
}


export default Intro;