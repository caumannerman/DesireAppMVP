import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import produce from 'immer';

import {registerUser} from '../services/UserService';

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

const Title = styled.Text`
  font-weight: 600;
  font-size: ${WIDTH * 0.073}px;
  color: #000000;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  font-weight: bold;
  font-style: normal;
  text-align: center;
`;

const CheckView = styled.ScrollView`
  width: 74%;
  border: #ff0000;
  background: #ffffff;
  border-radius: 2px;
  border: #d0d0d0;
`;

<<<<<<< Updated upstream
=======
async function registerUser({
  email,
  password,
  nickname,
  designFields,
  mmChoice,
  profileImage,
}) {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('nickname', nickname);
  designFields.map(designField => {
    formData.append('design_fields', designField); // UI/UX, BI/BX, 제품디자인, 시각디자인 중 택 여러 개 (designFields = ["UI/UX", "제품디자인"])
  });
  formData.append('acc_type', mmChoice); // "ME", "MO"
  //formData.append('profile_image', profileImage);

  console.log(designFields);
  console.log(mmChoice);
  console.log(`${BACKEND_URL}/api/v1/users/`);
  
  await axios
    .post(`${BACKEND_URL}/api/v1/users/`, formData)
    .then(() => {
      
    })
    .catch(err => {
      console.error(err.response.data);
    });
    
}

>>>>>>> Stashed changes
function Profile(props) {
  const [nickname, setNickname] = useState('');
  const [isPhoto, setPhoto] = useState(false);
  const changePhoto = bool => {
    setPhoto(bool);
  };
  const [profileImage, setProfileImage] = useState(null);
  const [designFields, setDesignFields] = useState([
    {category: 'UIUX', isCheck: false, value: 'UI/UX'},
    {category: 'BIBX', isCheck: false, value: 'BI/BX'},
    {category: '제품디자인', isCheck: false, value: '제품디자인'},
    {category: '시각디자인', isCheck: false, value: '시각디자인'},
  ]);

  return (
    <Container>
      <Background
        colors={['#ffffff', '#f8ecec', '#ffffff']}
        start={{x: 0.3, y: 0.3}}
        end={{x: 1.2, y: 1.2}}
        locations={[0, 0.3, 0.7]}>
        <Contents>
          <View
            style={{
              position: 'absolute',
              left: '11.11%',
              top: HEIGHT * 0.075,
              width: '22%',
              height: '5.9%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Title>프로필</Title>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#d0d0d0',
              position: 'absolute',
              top: HEIGHT * 0.1614,
              left: '36.66%',
              alignItems: 'center',
              justifyContent: 'center',
              width: '26.66%',
              height: WIDTH * 0.2666,
              borderRadius: 50,
              backgroundColor: '#e3e3e3',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../constants/images/EmptyProfile.png')}
              style={{
                width: isPhoto ? '100%' : '45%',
                height: isPhoto ? '100%' : '45%',
                resizeMode: 'contain',
                borderRadius: isPhoto ? 50 : 0,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              top: HEIGHT * 0.1714 + WIDTH * 0.2666,
              left: WIDTH * 0.408,
              textAlignVertical: 'center',
              textAlign: 'center',
              color: '#000000',
              width: WIDTH * 0.184,
              fontSize: WIDTH * 0.035,
            }}>
            프로필 사진
          </Text>

          <View
            style={{
              position: 'absolute',
              top: HEIGHT * 0.3771,
              left: '11.11%',
              width: '77.77%',
              flexDirection: 'column',
              height: HEIGHT * 0.335,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: HEIGHT * 0.015,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  height: HEIGHT * 0.06,
                  width: '26%',
                  color: '#000000',
                  fontSize: 14,
                  lineHeight: 20,
                  textAlignVertical: 'center',
                  fontWeight: '500',
                }}>
                닉네임
              </Text>
              <TextInput
                placeholder="     입력"
                style={{
                  height: HEIGHT * 0.06,
                  width: '74%',
                  backgroundColor: '#ffffff',
                  borderWidth: 1,
                  borderColor: '#d0d0d0',
                }}
                onChangeText={text => {
                  setNickname(text);
                }}></TextInput>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  height: HEIGHT * 0.06,
                  width: '26%',
                  color: '#000000',
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '500',
                }}>
                디자인분야
              </Text>

              <CheckView style={{height: HEIGHT * 0.26}}>
                <TouchableOpacity style={{height: 10}}></TouchableOpacity>

                {designFields.map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      setDesignFields(
                        produce(designFields, draft => {
                          const index = designFields.indexOf(item);
                          draft[index].isCheck = !designFields[index].isCheck;
                        }),
                      );
                    }}
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      height: HEIGHT * 0.06,
                      alignContent: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#425466',
                        textAlignVertical: 'center',
                        alignSelf: 'center',
                        paddingLeft: 20,
                      }}>
                      {item.category}
                    </Text>
                    <Image
                      style={{
                        width: HEIGHT * 0.025,
                        height: HEIGHT * 0.025,
                        alignSelf: 'center',
                        marginRight: 25,
                        opacity: item.isCheck ? 1 : 0,
                      }}
                      source={require('../constants/images/check.png')}></Image>
                  </TouchableOpacity>
                ))}
              </CheckView>
            </View>
          </View>

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: HEIGHT * 0.762,
              left: '11.11%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f34e4e',
              borderRadius: 4,
              height: HEIGHT * 0.057,
              width: '77.77%',
            }}
            onPress={() => {
              const selectedDesignFieldNames = designFields
                .filter(designField => designField.isCheck)
                .map(designFieldName => designFieldName.value);

              registerUser({
                email: props.route.params.email,
                password: props.route.params.pwd,
                mmChoice: props.route.params.mmChoice,
                nickname,
                designFields: selectedDesignFieldNames,
                profileImage,
              });
              props.navigation.navigate('HomeStack');
            }}>
            <ButtonText>시작하기</ButtonText>
          </TouchableOpacity>
        </Contents>
      </Background>
    </Container>
  );
}

export default Profile;
