import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Container = styled.SafeAreaView`
  flex: 1;
`;
const Background = styled(LinearGradient)`
  flex: 1;  

`;
const Contents = styled.View`
  flex: 1;
  
  flex-direction: column;
  align-items: center;
  
`;

const TitleView = styled.View`

  margin-top: 7%;
  margin-left: 10%;

  height: 39px;
  width: 85%;

  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  
`;


const Text = styled.Text`
  height: 40px;
  width: 30%;
  border: #0000ff;
  background: #f5f5f5;
  text-align:center;
  
  
`;

const TextInput = styled.TextInput`
  width : 100%;
  height: 40px;  
  background: #f5f5f5;
  border: #b0b0b0;
`;


const RowView = styled.View`
  border: #00ff00;
  height: 40px;
  width: 100%;
  background: #f5f5f5;
  flex-direction: row;
  
`;

const Category = styled.TouchableOpacity`
  height: 40px;
  border: #0000ff;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  font-color: #000000;
  
`;




const MainText = styled.TextInput`
  border: #0000ff;
  width: 100%;
  height: 35%;
`;

const File = styled.View`
  width: 100%;
  height: 15%;
  border: #d0d0d0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FileOpacity = styled.TouchableOpacity`
  width: 25%;
  height: 100%;
  
  justify-content: center;
  align-items: center;

`;
const Image = styled.Image`
  resizeMode: contain;
  
`;

const FileText = styled.Text`
  color: #000000;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
`;



const SendButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  
  background: #66bbff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const SendText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;

`;

function Reply(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>받은답장</Title>
              </TitleView>

              


              
              <MainText  placeholder="궁금한 내용을 질문해주세요
                                -명확한 상황 설명과 받고자 하는 답변내용을 적어주세요&#13;&#10;
                                -질문을 보내면 수정/삭제가 불가합니다.&#13;&#10;
                                -모든 이미지 파일은 안전하게 워터마크가 부착됩니다.&#13;&#10;"></MainText>
              <File>
                <FileOpacity>
                  <Image source={require('../constants/images/question/image.png')}/>
                  <FileText>사진</FileText>
                </FileOpacity>
                <FileOpacity>
                  <Image source={require('../constants/images/question/video.png')}/>
                  <FileText>동영상</FileText>
                </FileOpacity>
                <FileOpacity>
                  <Image source={require('../constants/images/question/file.png')}/>
                  <FileText>파일</FileText>
                </FileOpacity>
                <FileOpacity>
                  <Image source={require('../constants/images/question/voice.png')}/>
                  <FileText>녹음</FileText>
                </FileOpacity>
              </File>
              
              <SendButton>
                <SendText onPress = {() => {
                    props.navigation.navigate("ReplyDetail")
                }}>받은 답장 리스트</SendText>
              </SendButton>


            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Reply;