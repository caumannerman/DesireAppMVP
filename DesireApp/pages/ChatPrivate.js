import React,{useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View, TouchableOpacity, Text, ScrollView, TextInput} from 'react-native';
import ChatMessageService from '../services/ChatMessageService';

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
  flex-direction: row;
  top: 5%;
  left: 5%;
  align-items: center;
  height: 39px;
  width: 85%;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 39px;
`;

const ChatView = styled.View`
  width: 75%;
  border-radius: 24px;
  margin-bottom: 17px;
  justify-content: center;

  margin-left: 5%;
  background: #999999;
  
`;


const MyChatView = styled.View`
  width: 75%;
  border-radius: 24px;
  margin-bottom: 17px;
  justify-content: center;

  margin-left: 20%;
  background: #bb7dfc;
`;

const ChatText = styled.Text`
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 8%;
  margin-right:8%;
  margin-top: 10px;
  margin-bottom: 10px;
  
`;

function ChatPrivate(props){

  // 임시로 넣어놓은 내 아이디 
  const tmpMyId = '8136385e-42af-493f-a938-f7b6fdc97e69'

    const [nowChat, setNowChat] = useState('');
   

      //props로 받은 answerId로 가져온 answer정보를 담을 곳
    const [chatMessages, setChatMessages] = useState([]);

    const fetchChatMessages = async () => {
      await ChatMessageService.getList({
        ordering: '-created_on - descending',
        chatRoomId: props.route.params.chatroomid,
      
      }).then(res => {
        setChatMessages(res.data.results);
        console.log(res.data.results);
      });
    };
  
    useEffect(() => {
      fetchChatMessages();
    }, );
    
    const TEMP_USER_ID = '8136385e-42af-493f-a938-f7b6fdc97e69';
    // 전송버튼 누르면 chat을 서버로 보냄
   
    const postChatMessage = async () => {
  
      await ChatMessageService.create({
        userId: TEMP_USER_ID,
        chatRoomId: props.route.params.chatroomid,
        content: nowChat,
        
      }).then(() => {
        alert('tjdrhd')
      });
    };
  

    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>
              

              
                <View style={{backgroundColor: '#e4ecf7', borderWidth: 1, borderColor:'#d0d0d0', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                                 >
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:2}}>{props.route.params.chatrecipient}</Text>
                    <Text style={{fontSize: 15, fontWeight: '500', color:'#a0a0a0', marginBottom:3}}>2MIN</Text>
                    
                  </View>

                  <TouchableOpacity style={{ width:'20%', height:'40%', borderRadius:7, backgroundColor:'#6486ff', marginLeft: '25%', alignItems:'center', justifyContent:'center'}}
                         onPress={()=>{props.navigation.goBack()}}>
                    <Text style={{color: '#ffffff', fontSize: 14, fontWeight:'600'}}>채팅종료</Text>
                  </TouchableOpacity>
                </View>




                <ScrollView style={{  }}>
                  <Text style={{textAlign: 'center', marginTop:30, marginBottom: 30}}>멘토님과 1대1 매칭을 통해 궁금한 것을 물어보세요.</Text>
                  
                  {chatMessages.map(item => (
                    (item.user.id===tmpMyId?
                      <MyChatView>
                        <ChatText>
                          {item.content}
                        </ChatText>
                      
                      </MyChatView> :


                      <ChatView>
                        <ChatText>
                          {item.content}
                        </ChatText>
                      </ChatView>
                    )
                  ))}

                </ScrollView>
                 
                <View style={{width:'100%', height: 50,  backgroundColor:'#ffffff', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity  style={{width:'10%', height:50,  alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../constants/images/addfile.png')} resizeMode='contain'  style={{width:'40%',height:'40%'}}/>
                    </TouchableOpacity>

                    <TextInput style={{width:'74%', height: 40,  backgroundColor:'#ffffff'}} onChangeText={(text)=>setNowChat(text)} value={nowChat} onSubmitEditing={()=>{setNowChat("")}}></TextInput>

                    <TouchableOpacity  style={{width:'10%', height:50, magrinRight:'3%',alignItems:'center', justifyContent:'center'}}
                           onPress={()=> {if(nowChat !== ""){ postChatMessage();setNowChat("")} } }>
                      <Image source={require('../constants/images/chatsend.png')} resizeMode='contain' style={{width:'60%',height:'60%'}}/>
                    </TouchableOpacity>
                  
                </View>

            </Contents>
        </Background>
      </Container>
    
    )
}


export default ChatPrivate;