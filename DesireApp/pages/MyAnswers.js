import React, {useState,useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, ScrollView, Image, Platform,Dimensions} from 'react-native'
import QuestionService from '../services/QuestionService';
import AnswerService from '../services/AnswerService';

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

const ReplyButton = styled.TouchableOpacity`
  background:#ffffff;
  width:85%;
  margin-left:7.5%;
  margin-top: 10px;
  margin-bottom:12px;
  height: 91px;
  flex-direction: row;
  align-items: center;
  

  ${Platform.select({
    ios:{
      shadowColor: "#5a5a5a",
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: {
        width: -1,
        height: 0
      }
    },
    android:{
      elevation: 7
    }
  })};
`;



function MyAnswers(props){
  const TEMP_USER_ID = '8136385e-42af-493f-a938-f7b6fdc97e69';

  const changeQVisible = (bool) => {
    setQVisible(bool);
  }

  //User id가 한 Answer들을 저장할 곳
  const [nowIdMyAnswer, setNowIdMyAnswer] = useState([]);



  const fetchAnswer = async() =>{
    await AnswerService.getList({
      offset: 0,
      limit: 1000,
      ordering: '-created_on',
      userId:TEMP_USER_ID,
    }).then(res => {
      setNowIdMyAnswer(res.data.results);
      console.log(res.data.results);
      console.log("가져오기 성공");
    });
  }

  useEffect(() => {
    fetchAnswer();
  }, []);

  

    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.1, y: 0.2}} end={{x: 1.2, y: 1.2}} locations={[0,0.15,0.4]} >
            <Contents>


              <TitleView>
                <Title>내가 한 답변</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}>
                  <Text style={{color: '#000000', fontSize: 15, fontWeight: '800', textAlign: 'center'}}>이전</Text>
                </BackButton>
              </TitleView>
 
              <Text style={{ fontSize: 20, fontWeight:'500', textAlign:'center', marginTop: '5%', color:'#000000'}}>답변 리스트</Text>

              <ScrollView style={{ borderWidth: 1,borderColor: '#d0d0d0', width:'100%', height:'100%', marginTop: 7}}>
                

                {nowIdMyAnswer.map(answer => (
                   
                  <ReplyButton   onPress={()=>{const answer_id = answer.id;
                                props.navigation.navigate("MyAnswerDetail", {answerId:answer_id})}}>
                    
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                    
                    <View style={{flexDirection: 'column',width:'67%' }}>
                      <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>질문자닉네임</Text>
                      <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                      <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">{answer.content}</Text>
                    </View>
                  </ReplyButton>
              
                ))}

               
                

                


              </ScrollView>
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MyAnswers;