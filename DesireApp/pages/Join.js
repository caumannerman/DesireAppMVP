import React,{useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View,Modal} from 'react-native';
import validator from 'validator';
import produce from 'immer';
import EmailForm from '../components/EmailForm';
import PasswordForm from '../components/PasswordForm';
import PasswordComp from '../components/PasswordComp';


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
//alert(validator.isEmail('112k.dljf@noemail.c'))

function Join(props){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState("");
  const [isModal1Visible, setisModal1Visible] = useState(false);
  const [isModal2Visible, setisModal2Visible] = useState(false);
  const [isModal3Visible, setisModal3Visible] = useState(false);


  const changeModal1Visible = (bool) => {
    setisModal1Visible(bool);
  }
  const changeModal2Visible = (bool) => {
    setisModal2Visible(bool);
  }
  const changeModal3Visible = (bool) => {
    setisModal3Visible(bool);
  }
  
    return(
      
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
                <TitleView>
                    <Title>회원가입</Title>
                </TitleView>
                <View style={{position:'absolute', top:'21.13%',left:'11.11%', width:'77.77%',height:'36.58%',flexDirection:'column', justifyContent:'space-between'}}>
                  <TextInput placeholder="이메일 주소" onChangeText={(text) => {setEmail(text)}}></TextInput>
                  <TextInput placeholder="비밀번호" onChangeText={(text) => {setPassword(text)}}></TextInput>
                  <TextView>
                    <Text>8자 이상,숫자포함</Text>
                  </TextView>
                  <TextInput placeholder="비밀번호 확인" onChangeText={(text) => {setPassword2(text)}}></TextInput>

                  <Button onPress={()=>{
                    const tmplst = [validator.isEmail(email),(validator.isAlphanumeric(password)&& (!validator.isAlpha(password) && !validator.isNumeric(password)))&&password.length>7,validator.equals(password,password2)]
                    
                    if(tmplst[0] === false){
                     changeModal1Visible(true)
                    }
                    else if(tmplst[1] === false){
                      changeModal2Visible(true)
                    }
                    else if(tmplst[2] === false){
                      changeModal3Visible(true)
                    }
                    else{
                      props.navigation.navigate("Profile",{mmChoice:props.route.params.mmChoice,email:email,pwd:password})
                    }

                    }}>
                      <ButtonText >가입하기</ButtonText>
                  </Button>
                </View>

                <View style={{width:'69.7%', height:'30.7%',position: 'absolute', bottom:'7%', left:'15.15%', alignItems:'center', alignContent:'center'}}>
                    <Image source={require('../constants/images/Start.png')} style={{flex:1, resizeMode:'contain'}}/>
                </View>

                <Modal 
                  transparent={true} animationType='none' visible={isModal1Visible}
                  onRequestClose={() => changeModal1Visible(false)}
                  >
                  <EmailForm style={{alignItems:'center', justifyContent:'center'}}
                    changeModalVisible={changeModal1Visible}/>
                </Modal>

                <Modal 
                  transparent={true} animationType='none' visible={isModal2Visible}
                  onRequestClose={() => changeModal2Visible(false)}
                  >
                  <PasswordForm style={{alignItems:'center', justifyContent:'center'}}
                    changeModalVisible={changeModal2Visible}/>
                </Modal>

                <Modal 
                  transparent={true} animationType='none' visible={isModal3Visible}
                  onRequestClose={() => changeModal3Visible(false)}
                  >
                  <PasswordComp style={{alignItems:'center', justifyContent:'center'}}
                    changeModalVisible={changeModal3Visible}/>
                </Modal>

            </Contents>
        </Background>
      </Container>
    
    )
}

export default Join;