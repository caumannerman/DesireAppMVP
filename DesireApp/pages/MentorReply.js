import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TextInput, Text, Image, TouchableOpacity, View, ScrollView, Modal, Dimensions} from 'react-native';
import MentorReplyModal from '../components/MentorReplyModal';
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  
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

const FileText = styled.Text`
  color: #000000;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
`;

const BackButton = styled.TouchableOpacity`
 
  width: 50px;
  height: 100%;
  justify-content: center;
`;


const BackText = styled.Text`
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  

`;




function MentorReply(props){
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }

  const setData = (data) => {
    setchooseData(data);
  }
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>답변하기</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}><BackText>이전</BackText></BackButton>
              </TitleView>

            


              <View style={{borderWidth:0.4, borderColor:'#a0a0a0', width:'100%', height:'35%', alignItems:'center'}}>
                <TextInput style={{ width:'90%',height:'100%'}} placeholder="성실하게 답변해주세요"></TextInput>
              </View>
         
              <File>
                <FileOpacity>
                  <Image source={require('../constants/images/question/image.png')} resizeMode="contain"/>
                  <FileText>사진</FileText>
                </FileOpacity>
                <FileOpacity>
                  <Image source={require('../constants/images/question/video.png')} resizeMode="contain"/>
                  <FileText>동영상</FileText>
                </FileOpacity>
                <FileOpacity>
                  <Image source={require('../constants/images/question/file.png')} resizeMode="contain"/>
                  <FileText>파일</FileText>
                </FileOpacity>
                <FileOpacity>
                  <Image source={require('../constants/images/question/voice.png')} resizeMode="contain"/>
                  <FileText>녹음</FileText>
                </FileOpacity>
              </File>
              
              <TouchableOpacity style={{width:'80%', height:40,marginTop:30,backgroundColor:'#952bff', borderRadius:4 , alignItems:'center', justifyContent:'center'}}
                                onPress={()=>{changeModalVisible(true)}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'#ffffff'}}>보내기</Text>
              </TouchableOpacity>

           
              <Modal 
                transparent={true} animationType='slide' visible={isModalVisible}
                onRequestClose={() => changeModalVisible(false)}
               
                >
                <MentorReplyModal style={{alignItems:'center', justifyContent:'center'}}
                  changeModalVisible={changeModalVisible}
                  setData={setData}/>
              </Modal>
           

            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorReply;