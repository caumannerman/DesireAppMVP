import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Image, View, Modal} from 'react-native';
import validator from 'validator';
import produce from 'immer';
import SignInCorrect from '../components/SignInCorrect';

import {login, logout} from '../services/AuthService';
import useAuth from '../services/useAuth';

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
  width: ${parseInt((WIDTH / 100) * 29)};
  line-height: 41px;
  justify-content:center;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: ${WIDTH * 0.07};
  color: #000000;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border: #d0d0d0;
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
const Button2 = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #f34e4e;
  border-radius: 4px;
  height: 40px;
  width: 30%;
  
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

function Join(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {isLoggedIn,getAuth} = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  const [isModal1Visible, setisModal1Visible] = useState(false);

  const changeModal1Visible = bool => {
    setisModal1Visible(bool);
  };


  useEffect(() => {
    (async () => {
      const tempLoggedIn = await isLoggedIn();
      console.info('isLoggedIn: ', tempLoggedIn);
      setLoggedIn(tempLoggedIn);
    })();
  }, []);

  return (
    <Container>
      <Background
        colors={['#ffffff', '#f8ecec', '#ffffff']}
        start={{x: 0.3, y: 0.3}}
        end={{x: 1.2, y: 1.2}}
        locations={[0, 0.3, 0.7]}>
        <Contents>
          <TitleView>
            <Title>?????????</Title>
          </TitleView>
          <View
            style={{
              position: 'absolute',
              top: '21.13%',
              left: '11.11%',
              width: '77.77%',
              height: '26.58%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="?????????"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="????????????"
              value={password}
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
              }}autoCapitalize="none"
            />

            <Button
              onPress={async () => {
                //????????? DB??? ?????? ????????? ,???????????? ??????
                const tmplst = [
                  validator.isEmail(email)&&
                  validator.isAlphanumeric(password) &&
                    !validator.isAlpha(password) &&
                    !validator.isNumeric(password) &&
                    password.length > 7,
                ];
                // ????????? ????????? ?????????, ???????????? ???????????? ???????????????

                //???????????? ????????? ?????? ??????
                if (tmplst[0] === false) {
                  changeModal1Visible(true);
                } else {
                  // ??????????????? ??????????????? ???????????? ??????????????? ??????


                  await login({email, password});
                  const logCheck = await isLoggedIn();
                  if(logCheck){
                    console.log(logCheck);
                    console.log(getAuth());
                    props.navigation.navigate('Tab');
                  }
                  else{
                    changeModal1Visible(true)
                  }
                  
                 
                }
              }}>
              <ButtonText>?????????</ButtonText>
            </Button>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Button2 style={{backgroundColor: '#ff000000'}}></Button2>
              <Button2 style={{backgroundColor: '#ff000000'}}></Button2>
              <Button2 onPress={()=>{props.navigation.navigate("Start")}}>
                <ButtonText>????????????</ButtonText>
              </Button2>
            </View>

           
          </View>

          <View
            style={{
              width: '69.7%',
              height: '30.7%',
              position: 'absolute',
              bottom: '7%',
              left: '15.15%',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Image
              source={require('../constants/images/Start.png')}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Modal
            transparent={true}
            animationType="none"
            visible={isModal1Visible}
            onRequestClose={() => changeModal1Visible(false)}>
            <SignInCorrect
              style={{alignItems: 'center', justifyContent: 'center'}}
              changeModalVisible={changeModal1Visible}
            />
          </Modal>
        </Contents>
      </Background>
    </Container>
  );
}

export default Join;
