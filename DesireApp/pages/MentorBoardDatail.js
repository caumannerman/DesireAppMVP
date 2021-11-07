import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View, TouchableOpacity, ScrollView, Image, Modal} from 'react-native'
import Satisfaction from '../components/Satisfaction';

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





function MentorBoardDetail(props){

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
                <Title>질문 내용</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}><BackText>이전</BackText></BackButton>
              </TitleView>

             
                <View style={{borderWidth:1, borderColor:'#d0d0d0',flexDirection:'column', width:'100%', height:'40%', alignItems:'center', justifyContent:'center'}}>

                  <ScrollView style={{width:'80%', marginTop:'10%'}}>
                    <Text>저는 그리고 모르는게 있으면 예시로 몇 개 만들어서 보내드린 것 중에 설명해주신거랑 맞는게 무엇인지 꼼꼼하게 물어보는게 최선일 듯 합니다.
                      캡쳐이미지 넣고 세부 스펙이나 더 궁금한거 피그마 링크도 가티 첨부해 주시는 것도 좋을 것 같네요.
                    </Text>
                  </ScrollView>

                </View>

                <TouchableOpacity style={{backgroundColor:'#952bff', width: '75%', height: '8%', borderRadius: 5, alignItems:'center', justifyContent:'center', marginTop:20}}
                                  onPress={()=>{props.navigation.navigate("MentorReply")}}>
                  <Text style={{color:'#ffffff', fontSize:19, fontWeight:'bold'}}>답변하기</Text>
                </TouchableOpacity>
              
                <Modal 
                transparent={true} animationType='slide' visible={isModalVisible}
                onRequestClose={() => changeModalVisible(false)}
               
                >
                <Satisfaction 
                  changeModalVisible={changeModalVisible}
                  setData={setData}/>
              </Modal>
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorBoardDetail;