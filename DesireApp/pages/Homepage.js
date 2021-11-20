import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions,  ScrollView,View, Text, TouchableOpacity} from 'react-native';
import ChatRoomService from '../services/ChatRoomService';
import useAuth from '../services/useAuth';
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
`;
const Part = styled.TouchableOpacity`
  height: ${HEIGHT*0.1489};
  width: ${HEIGHT*0.1589};
  border-radius: 16px;
  margin-right: ${WIDTH*0.04};
  background: #ffffff;
  border: #ebebeb;
  flex-direction: column;
  justify-content: center;
`;
const PartTitle = styled.Text`
  position: absolute;
  left: 11.45%;
  top: 16%;
  color: #2c2c2c;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  width: 77.77%;
`;
const PartReply = styled.Text`
  position: absolute;
  left: 11.45%;
  top: 56%;
  color: #952bff;
  font-style: normal;
  font-weight:bold;
  font-size: 12px;
`;
const PartChat = styled.Text`
  position: absolute;
  left: 11.45%;
  top: 78%;
  color: #952bff;
  font-style: normal;
  font-weight:bold;
  font-size: 12px;
`;

const PartDate = styled.Text`
  position: absolute;
  left: 50%;
  top: 78%;
  color: #acacac;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

const BText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

const PartText = styled.Text`
  position: absolute;
  left: 11.45%;
  top: 60%;
  color: #828282;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  width: 77.77%;
`;

const Image = styled.Image`
  position: absolute;
  left: 11.45%;
  top: 12%;
  
`;

function Homepage(props){
 
   const [userId, setUserId] = useState();
   
  
  const TEMP_USER_NICKNAME = "새싹디자이너";

  const [designFields, setDesignFields] = useState([
    {category: 'UIUX', isCheck: false, value: 'UI/UX',key:1},
    {category: 'BIBX', isCheck: false, value: 'BI/BX',key:2},
    {category: '제품디자인', isCheck: false, value: '제품디자인',key:3},
    {category: '시각디자인', isCheck: false, value: '시각디자인',key:4},
  ]);

  const {getAuth} = useAuth();

  const [questionList, setQuestionList] = useState([]);
  const fetchQuestionList = async (tempUserId) => {
    
    await QuestionService.getList({
      offset: 0,
      limit: 1000,
      ordering: '-created_on',
      userId: tempUserId,
    }).then(res => {
      setQuestionList(res.data.results);
      console.log(res.data.results);
      console.log("fetchQ"+tempUserId);
    });
  };

  //props로 받은 answerId로 가져온 answer정보를 담을 곳--내가 sender인 채팅방만 가져오면 됨 
  const [chatRoomList, setChatRoomList] = useState([]);
  const fetchCRList = async (tempUserId) => {
    await ChatRoomService.getList({
      ordering: '-created_on',
      senderId: tempUserId,
    
    }).then(res => {
      setChatRoomList(res.data.results);
      console.log(res.data.results);
    });
  };

  const [nowAccType, setNowAccType] = useState('');
  


  useEffect(() => {
    
    (async () => {

        const  {userId} = await getAuth();
        setUserId(userId);
        const  {accType} = await getAuth();
        setNowAccType(accType);
      
      const tempUserId = userId;
      await fetchQuestionList(tempUserId);
      await fetchCRList(tempUserId);
    })();

   
    
  }, []);







    return(
    
      <Container>
        <Background colors={['#ecf9ff','#ffffff','#f8f0f0']} start={{x: 0.1, y: 0.2}} end={{x: 0.8, y: 0.8}} locations={[0,0.3,0.5]} >
            <Contents>


              <View style={{position:'absolute', top:HEIGHT*0.0357,left:WIDTH*0.1111, flexDirection:'row',justifyContent:'space-between', width:WIDTH*0.8078, alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'800',color:'#000000',width:WIDTH*0.22}}>DESIRE</Text>
                <TouchableOpacity style={{height:'100%', width:40}} ><Image resizeMode="contain" style={{flex:1}} source={require('../constants/images/homepage/notifications_24px.png')}/></TouchableOpacity>
              </View>

              <Text style={{position:'absolute', top:HEIGHT*0.0894, left:WIDTH*0.1111,color:'#929292', fontSize:14,fontWeight:'500'}}>  {TEMP_USER_NICKNAME}님, 환영합니다.</Text>
              <View style={{position:'absolute', left:WIDTH*0.1111,top:HEIGHT*0.1299,width:WIDTH*0.7778, height: WIDTH*0.5044, flexDirection:'column',borderRadius:16,borderWidth:1, borderColor:'#ebebeb', backgroundColor:'#ffffff'}}>
                  <Text style={{position:'absolute', top:'11%', left:'7.14%',fontSize:16,fontWeight:'bold',color:'#2c2c2c'}}>디자인 일을 하며 생긴 어려움</Text>
                  {nowAccType==="ME"?
                  <Text style={{position:'absolute', top:'25.5%', left:'7.14%',fontSize:14,fontWeight:'normal',color:'#5f5f5f'}}>일을하며 생긴 어려움 바로 멘토님에게! </Text>:
                  <Text style={{position:'absolute', top:'25.5%', left:'7.14%',fontSize:14,fontWeight:'normal',color:'#5f5f5f'}}>일을하며 어려움이 생긴 후배에게 </Text>}
                   {nowAccType==="ME"?
                  <Text style={{position:'absolute', top:'35.5%', left:'7.14%',fontSize:14,fontWeight:'normal',color:'#5f5f5f'}}>마음 편하게 언제 어디든 질문하세요.</Text>:
                  <Text style={{position:'absolute', top:'35.5%', left:'7.14%',fontSize:14,fontWeight:'normal',color:'#5f5f5f'}}>답변을 하고 리워드를 받으세요.</Text>}

                  <TouchableOpacity style={{position:'absolute', top:'51.6%', left:'7.14%',backgroundColor:'#952bff', borderRadius:4,justifyContent:'center',width:WIDTH*0.2987,height:WIDTH*0.1049}} 
                  onPress={()=>{nowAccType==="ME"?props.navigation.navigate("QuestionStack"):props.navigation.navigate("QBoardStack")}}>
                  {nowAccType==="ME"?
                      <BText>질문하기</BText>:<BText>답변하기</BText>}
                  </TouchableOpacity>

                  <Image resizeMode="contain" source={require('../constants/images/homepage/group2173.png')} style={{position:'absolute', top:'51.6%', left:'57.14%'}}/>
               
              </View>

               
              <TouchableOpacity style={{position:'absolute', left:WIDTH*0.1111,top:HEIGHT*0.4114 , width: WIDTH*0.3, height:HEIGHT*0.033}} 
              onPress={()=>{nowAccType==="ME"?props.navigation.navigate("MyquestionStack"):props.navigation.navigate("MyAnswerStack")}}>
                
                {nowAccType==="ME"?
                <Text style={{fontSize:16,fontWeight:'normal',fontWeight:'500',color:'#000000'}}>내가 한 질문  »</Text>:
                <Text style={{fontSize:16,fontWeight:'normal',fontWeight:'500',color:'#000000'}}>답변 게시판  »</Text>}
                </TouchableOpacity>
         

                {nowAccType==='ME'?
                <ScrollView horizontal={true} style = {{position:'absolute',left:WIDTH*0.1111, top:HEIGHT*0.4543, height:WIDTH*0.3639}} > 
                {questionList.map(question => (
                  <Part onPress={() => {
                    const question_id = question.id;
                    props.navigation.navigate('Reply', {questionId:question_id});
                  }}><PartTitle numberOfLines={2} ellipsizeMode="tail">{question.title}</PartTitle><PartReply>답장 {question.answer_count}개</PartReply><PartDate>{question.created_on.substring(2,4)}.{question.created_on.substring(5,7)}.{question.created_on.substring(8,10)}</PartDate></Part>
                ))}
                </ScrollView>:
                <ScrollView horizontal={true} style = {{position:'absolute',left:WIDTH*0.1111, top:HEIGHT*0.4543, height:WIDTH*0.3639}} > 
                {designFields.map(dfield => (
                  <Part onPress={() => {
                    const dfield_category = dfield.category;
                    props.navigation.navigate('QBoardStack');
                  }}><PartTitle numberOfLines={2} ellipsizeMode="tail">{dfield.category}{"\n"}게시판</PartTitle><PartReply>입장하기</PartReply></Part>
                ))}
                </ScrollView>
                }
             



              <TouchableOpacity style={{position:'absolute', left:WIDTH*0.1111,top:HEIGHT*0.6385, width: WIDTH*0.3, height:WIDTH*0.3639}} 
              onPress={()=>{props.navigation.navigate("ChatStack")}}>
                <Text style={{fontSize:16,fontWeight:'normal',fontWeight:'500',color:'#000000'}}>1대1 채팅     »</Text>
                </TouchableOpacity>

                <ScrollView horizontal={true} style = {{position:'absolute',left:WIDTH*0.1111, top:HEIGHT*0.6793, height:HEIGHT*0.2}} > 
                  {chatRoomList.map(chatroom => (
                  <Part  onPress={()=>{
                    const chatroomid = chatroom.id;
                    props.navigation.navigate("ChatPrivate", {chatroomid:chatroomid, chatrecipient:chatroom.recipient.nickname})}}>
                      <Image source={require('../constants/images/homepage/human.png')} ></Image>
                      <PartText numberOfLines={1} ellipsizeMode="tail">{chatroom&&chatroom.latest_chat_message&&chatroom.latest_chat_message.content}</PartText>
                      <PartChat>채팅 중</PartChat>
                      <PartDate>{chatroom.created_on&&chatroom.created_on.slice(2,4)}.{chatroom.created_on&&chatroom.created_on.slice(5,7)}.{chatroom.created_on&&chatroom.created_on.slice(8,10)}</PartDate>
                  </Part>
                  
                
                  ))}
                 </ScrollView>
          


            </Contents>
        </Background>
      </Container>
    
    )
}


export default Homepage;