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



function Reply(props){

  const [isQVisible, setQVisible] = useState(false);

  const changeQVisible = (bool) => {
    setQVisible(bool);
  }

//props로 받은 QuestionID로 가져온 question정보를 담을 곳
  const [nowQuestion, setNowQuestion] = useState({});
  //해당 질문에 달린 Answer들을 저장할 곳
  const [nowQuestionAnswer, setNowQuestionAnswer] = useState([]);

  const fetchQuestion = async () => {
    await QuestionService.getOne({
      id: props.route.params.questionId,
    }).then(res => {
      setNowQuestion(res.data);
      console.log(res.data);
    });
  };

  const fetchAnswer = async() =>{
    await AnswerService.getList({
      offset: 0,
      limit: 1000,
      ordering: '-created_on',
      userId:'',
      questionId: props.route.params.questionId,
    }).then(res => {
      setNowQuestionAnswer(res.data.results);
      console.log(res.data.results);
      console.log("가져오기 성공");
    });
  }

  useEffect(() => {
    fetchAnswer();
    fetchQuestion();
  }, []);

  

    return(
    
      <Container>
        <Background colors={(isQVisible?['#ffffff','#fff3f3','#edfcff']:['#ffffff','#f8ecec','#ffffff'])} start={{x: 0.1, y: 0.2}} end={{x: 1.2, y: 1.2}} locations={[0,0.15,0.4]} >
            <Contents>


              <TitleView>
                <Title>받은답장</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}>
                  <Text style={{color: '#000000', fontSize: 15, fontWeight: '800', textAlign: 'center'}}>이전</Text>
                </BackButton>
              </TitleView>
 
              <View style={{height:isQVisible? HEIGHT*0.67:'37%', width: '100%', backgroundColor:((isQVisible?"rgba(255,255,255,0)":"rgba(255,255,255,1)")), borderColor:'#d0d0d0', borderWidth: 2, alignItems:'center', justifyContent:'center'}}>
                 
                  <View style={{width: '80%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                    <Text style={{fontWeight: '800', fontSize: 16, color:'#000000'}} >{nowQuestion.title}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 12, color:'#000000'}}>{nowQuestion.created_on&&nowQuestion.created_on.slice(2,10)}</Text>
                  </View>

                  <View style={{ width:'77%', height: '45%'}}>
                    <Text style={{fontWeight: '300', fontSize: 12, color:'#000000'}} numberOfLines={isQVisible?20:4} ellipsizeMode="tail">{nowQuestion.question_text}</Text>
                  </View>


                  <TouchableOpacity  onPress={()=>changeQVisible(!isQVisible)}>
                    <Text style={{color: '#000000'}}>{isQVisible?'줄이기':'내가 한 질문 더보기 +'}</Text>
                  </TouchableOpacity>

              </View>



              <Text style={{ fontSize: 20, fontWeight:'500', textAlign:'center', marginTop: '5%', color:'#000000'}}>받은 답장 리스트</Text>

              <ScrollView style={{ borderWidth: 1,borderColor: '#d0d0d0', width:'100%', height:'100%', marginTop: 7}}>
                

                {nowQuestionAnswer.map(answer => (
                   
                  <ReplyButton   onPress={()=>{const answer_id = answer.id;
                                              const answer_recipient_id = answer.user.id;
                                props.navigation.navigate("ReplyDetail", {answerId:answer_id, answerRecipient:answer_recipient_id})}}>
                    
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      {answer.user.profile_image!= null?
                      <Image source={{url:answer.user.profile_image}} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>:
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                      }

                    </View>
                    
                    <View style={{flexDirection: 'column',width:'67%' }}>
                      <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>{answer.user.nickname}</Text>
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


export default Reply;