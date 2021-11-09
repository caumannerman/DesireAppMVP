import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { Dimensions, Image, View} from 'react-native';

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
  top: 10.43%
  width: ${parseInt(WIDTH / 100 *29)};
  line-height: 41px;
  justify-content:center;
`;

const Title = styled.Text`
  font-weight:600;
  font-size:${WIDTH * 0.07};
  color: #000000;
`;

const TextInput = styled.TextInput`
  width : 100%;
  height: 40px;
  border: #D0D0D0;
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

function Join(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
                <TitleView>
                    <Title>회원가입</Title>
                </TitleView>
                <View style={{position:'absolute', top:'21.13%',left:'11.11%', width:'77.77%',height:'36.58%',flexDirection:'column', justifyContent:'space-between'}}>
                  <TextInput placeholder="이메일 주소"></TextInput>
                  <TextInput placeholder="비밀번호"></TextInput>
                  <TextView>
                    <Text>8자 이상,숫자포함</Text>
                  </TextView>
                  <TextInput placeholder="비밀번호 확인"></TextInput>

                  <Button onPress={() => {props.navigation.navigate("Profile")}}>
                      <ButtonText>가입하기</ButtonText>
                  </Button>
                </View>

                <View style={{width:'69.7%', height:'30.7%',position: 'absolute', bottom:'7%', left:'15.15%', alignItems:'center', alignContent:'center'}}>
                    <Image source={require('../constants/images/Start.png')} style={{flex:1, resizeMode:'contain'}}/>
                </View>

            </Contents>
        </Background>
      </Container>
    
    )
}

export default Join;