import React, {useState,useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, Dimensions,ScrollView, Image, Modal} from 'react-native'
import QuestionService from '../services/QuestionService';

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


const BackText = styled.Text`
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  

`;

function MentorBoardDetail(props){
  
  //props로 받은 QuestionID로 가져온 question정보를 담을 곳
  const [nowQuestion, setNowQuestion] = useState({});

  const fetchQuestion = async () => {
    await QuestionService.getOne({
      id: props.route.params.questionid,
    }).then(res => {
      setNowQuestion(res.data);
      console.log(res.data);
    });
  };


  useEffect(() => {
    fetchQuestion();
 },[]);
  
    return(
      
      <Container>
        <Background colors={['#ffffff', '#e9fafa','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
              

              <TitleView>
                <Title>질문 내용</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}><BackText>이전</BackText></BackButton>
              </TitleView>

             
                <View style={{borderWidth:1, borderColor:'#d0d0d0',flexDirection:'column', width:'100%', height:'45%', alignItems:'center', justifyContent:'center', alignContent:'center',}}>
                  
                  <View style={{flexDirection:'row', width:'80%', marginTop:'6%',justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontWeight:'600', fontSize:17, color:'#000000'}}>{nowQuestion.title}</Text>
                    <Text style={{fontWeight:'bold', fontSize:12, color:'#727272'}}>{nowQuestion&&nowQuestion.created_on&&nowQuestion.created_on.slice(2,10)}</Text>
                  </View>

                  <ScrollView style={{width:'80%', marginTop:'10%'}}>
                    <Text style={{color:'#000000', fontWeight:'300',lineHeight:20}}>
                    {nowQuestion.question_text}
                    </Text>
                  </ScrollView>

                </View>

                <TouchableOpacity style={{backgroundColor:'#952bff', width: '77.77%', height: '6.5%', borderRadius: 5, alignItems:'center', justifyContent:'center', marginTop:50}}
                                  onPress={()=>{props.navigation.navigate("MentorReply", {questionid:props.route.params.questionid})}}>
                  <Text style={{color:'#ffffff', fontSize:19, fontWeight:'bold'}}>답변하기</Text>
                </TouchableOpacity>
              
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorBoardDetail;