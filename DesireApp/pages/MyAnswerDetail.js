import React, {useState,useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, ScrollView, Image, Modal} from 'react-native'
import Satisfaction from '../components/Satisfaction';
import AnswerService from '../services/AnswerService';
import AnswerEvaluationService from '../services/AnswerEvaluationService';
import ChatRoomService from '../services/ChatRoomService';


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





function MyAnswerDetail(props){

   

  //props로 받은 answerId로 가져온 answer정보를 담을 곳
  const [nowAnswer, setNowAnswer] = useState({});

  const fetchAnswer = async () => {
    await AnswerService.getOne({
      id: props.route.params.answerId,
    }).then(res => {
      setNowAnswer(res.data);
      console.log(res.data);
    });
  };




  useEffect(() => {
   
    fetchAnswer();
  }, []);

    return(
    
      <Container>
        <Background colors={['#ffffff', '#e9fafa','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>내가 한 답변</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}><BackText>이전</BackText></BackButton>
              </TitleView>

              <View style={{backgroundColor: '#e4ecf7', borderWidth: 1, borderColor:'#d0d0d0', width:'100%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                 >
                  
                  <View style={{borderWidth: 1 , borderColor:'#ffaacc', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={{uri:nowAnswer.question&&nowAnswer.question.user&&nowAnswer.question.user.profile_image}} resizeMode='cover' style={{width: '100%', height: '100%',borderRadius:50}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column', width:'40%'}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:3}} numberOfLines={2} ellipsizeMode="tail">{nowAnswer.question&&nowAnswer.question.user&&nowAnswer.question.user.nickname}</Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    
                  </View>

                  

              </View>

                <View style={{flexDirection:'column', width:'100%', height:'40%', alignItems:'center', justifyContent:'center'}}>

                  <ScrollView style={{width:'80%', marginTop:'10%'}}>
                    <Text style={{color:'#000000'}}>{nowAnswer.content}</Text>
                  </ScrollView>

                </View>

                
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MyAnswerDetail;