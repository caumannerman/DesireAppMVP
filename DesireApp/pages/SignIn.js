import React,{useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View,Modal} from 'react-native';
import validator from 'validator';
import produce from 'immer';
import SignInCorrect from '../components/SignInCorrect';



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
//alert(validator.isEmail('112k.dljf@noemail.c'))

function Join(props){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const [isModal1Visible, setisModal1Visible] = useState(false);



  const changeModal1Visible = (bool) => {
    setisModal1Visible(bool);
  }

    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
                <TitleView>
                    <Title>로그인</Title>
                </TitleView>
                <View style={{position:'absolute', top:'21.13%',left:'11.11%', width:'77.77%',height:'26.58%',flexDirection:'column', justifyContent:'space-between'}}>
                  <TextInput placeholder="아이디" onChangeText={(text) => {setEmail(text)}}></TextInput>
                  <TextInput placeholder="비밀번호" onChangeText={(text) => {setPassword(text)}}></TextInput>
                  
                  <Button onPress={()=>{
                      //여기서 DB에 있는 아이디 ,비번이랑 비교 
                    const tmplst = [validator.isEmail(email),(validator.isAlphanumeric(password)&& (!validator.isAlpha(password) && !validator.isNumeric(password)))&&password.length>7]
                    // 여기서 유효한 아이디, 비번인지 체크해서 로그인여부

                    //유효하지 않다면 모달 띄움
                    if(tmplst[0] === false){
                     changeModal1Visible(true)
                    }
                  
                    
                    else{// 유효하다면 로그인정보 저장하고 홈페이지로 전황 
                        
                      props.navigation.navigate("Homepage")
                    }

                    }}>
                      <ButtonText >로그인</ButtonText>
                  </Button>
                </View>

                <View style={{width:'69.7%', height:'30.7%',position: 'absolute', bottom:'7%', left:'15.15%', alignItems:'center', alignContent:'center'}}>
                    <Image source={require('../constants/images/Start.png')} style={{flex:1, resizeMode:'contain'}}/>
                </View>

                <Modal 
                  transparent={true} animationType='none' visible={isModal1Visible}
                  onRequestClose={() => changeModal1Visible(false)}
                  >
                  <SignInCorrect style={{alignItems:'center', justifyContent:'center'}}
                    changeModalVisible={changeModal1Visible}/>
                </Modal>

             
            </Contents>
        </Background>
      </Container>
    
    )
}

export default Join;