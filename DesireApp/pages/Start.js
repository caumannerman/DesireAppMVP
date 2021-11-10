import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View, Platform} from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

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
  position: absolute;
  font-style: normal;
  left: 11.11%;
  top: 10.43%;
  width: 46.94%;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight:600;
  font-size:  ${ parseInt(WIDTH / 700 * 46.94 )};
  line-height: 41px;
  color: #000000;
  margin-bottom:1%;
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  color: #000000;
`;

const ButtonView = styled.View`
  position: absolute;
  top: 26%;
  left: 11.11%;
  flex-direction: row;
  width: 80%
  height: ${WIDTH * 0.33}
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  
  height: 100%;
  width: ${WIDTH * 0.35};
  height: ${WIDTH * 0.33};
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  justify-content: center;
  ${Platform.select({
    ios:{
      shadowColor: "#5a5a5a",
       shadowOpacity: 0.8,
       shadowRadius: 7,
       shadowOffset: {
         width: -1,
         height: 0
      }
    },
    android:{
      elevation: 15
    }
  })};
`;

const ButtonText = styled.Text`

  font-size: ${WIDTH * 0.08}px;
  font-weight: bold;
  color: #6486ff;
  font-weight: bold;
  font-style: normal;
  line-height:${HEIGHT*0.08}px;
`;

const ButtonText2 = styled.Text`
  font-size: ${WIDTH * 0.03}px;
  font-weight: 500;
  font-style: normal;
  color: #898989;  
`;




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


                <View style={{width:'69.7%', height:'30.7%',position: 'absolute', bottom:'7%', left:'15.15%', alignItems:'center'}}>
                    <Image source={require('../constants/images/Start.png')} style={{resizeMode:'contain',flex:1}}/>
                </View>


            </Contents>
        </Background>
      </Container>
    
    )
}


export default Start;