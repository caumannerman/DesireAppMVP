import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import ChatRoomService from '../services/ChatRoomService';
import useAuth from '../services/useAuth';

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

const Glass = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${HEIGHT*0.033};
  width: ${HEIGHT*0.033};
  
`;


function Chat(props){

   const {getAuth} = useAuth();
   const [userId, setUserId] = useState();
   const [accType, setAccType] = useState('');
  //props로 받은 answerId로 가져온 answer정보를 담을 곳
  const [chatRoomList, setChatRoomList] = useState([]);

//멘티용 
  const fetchCRList_ME = async (tempUserId) => {
    await ChatRoomService.getList({
      userId,
      ordering: '-created_on',
      senderId: tempUserId,
    }).then(res => {
      setChatRoomList(res.data.results);
      console.log(res.data.results);
    });
  };
//멘토용
  const fetchCRList_MO = async (tempUserId) => {
    await ChatRoomService.getList({
      userId,
      ordering: '-created_on',
      recipientId: tempUserId,
    
    }).then(res => {
      setChatRoomList(res.data.results);
      console.log(res.data.results);
    });
  };


  useEffect(() => {
    (async ()=> {
      const  {userId,accType} = await getAuth();
      console.log(accType,userId)
      setUserId(userId);
      setAccType(accType);
      const tempUserId = userId;
      
      {accType==="ME"?
      await fetchCRList_ME(tempUserId):
      await fetchCRList_MO(tempUserId)}
    })();
 
  }, []);

    return(
      
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents style={{backgroundColor:'#f0f0f0'}}>

              <View style={{flexDirection:'row', position:'absolute', top:HEIGHT*0.057,left:WIDTH*0.1111,alignItems:'center',justifyContent:'space-between',width:'80%', height:HEIGHT*0.033}}>
                <Text style={{ color:'#000000', width:WIDTH*0.2767, height:HEIGHT*0.033 , fontSize:WIDTH*0.0431, fontWeight:'600'}}>진행중인 채팅</Text>
                <Glass><Image source={require('../constants/images/homepage/glasses.png')}/></Glass>
              </View>

              <ScrollView style={{ borderWidth:1, borderColor:'#dfdfdf',position:'absolute', top:HEIGHT*0.1114,width:'100%',height:'100%',flexDirection:'column'}}>
                
                {chatRoomList.map(chatroom => (

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#f5f5f5', width:'100%',  height:HEIGHT*0.1114,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{
                      const chatroomid = chatroom.id;
                      if(accType==="MO"){
                      props.navigation.navigate("ChatPrivate", {chatroomid:chatroomid, chatnickname:chatroom.sender.nickname, chatid:chatroom.sender.id})}
                      else{
                        props.navigation.navigate("ChatPrivate", {chatroomid:chatroomid, chatnickname:chatroom.recipient.nickname, chatid:chatroom.recipient.id})
                      }
                        
                    }}>
                  
                  {accType==="MO"?
                    <View style={{height: WIDTH*0.1333, width: WIDTH*0.1333, borderRadius: 50,left:WIDTH*0.1138,borderWidth:1, borderColor:'#ffaacc',alignItems:'center',justifyContent:'center'}}>
                      {chatroom&&chatroom.sender&&chatroom.sender.profile_image&& 
                      <Image source={{uri:chatroom.sender.profile_image}} resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 50,backgroundColor:'#ff0000'}}></Image>}
                    </View>:
                    
                    <View style={{height: WIDTH*0.1333, width: WIDTH*0.1333, borderRadius: 50,left:WIDTH*0.1138,borderWidth:1, borderColor:'#ffaacc',alignItems:'center',justifyContent:'center'}}>
                    {chatroom&&chatroom.recipient&&chatroom.recipient.profile_image&& 
                    <Image source={{uri:chatroom.recipient.profile_image}} resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 50}}></Image>}
                   </View>
                    }
                    
                    <View style={{flexDirection: 'column' , left:WIDTH*0.1606, width:WIDTH*0.5183, height:HEIGHT*0.0566, justifyContent:'space-between'}}>
                    {accType==="ME"?
                      <Text style={{fontSize: WIDTH*0.035,fontWeight:'bold', width:WIDTH*0.4833, color:'#000000'}}>{chatroom&&chatroom.recipient&&chatroom.recipient.nickname}</Text>:
                      <Text style={{fontSize: WIDTH*0.035,fontWeight:'bold', width:WIDTH*0.4833, color:'#000000'}}>{chatroom&&chatroom.sender&&chatroom.sender.nickname}</Text>}
                      <Text style={{fontSize: 13,fontWeight:'300', width:WIDTH*0.4833, height: HEIGHT*0.0243,color:'#858585'}}>{chatroom&&chatroom.latest_chat_message&&chatroom.latest_chat_message.content}</Text>
                    </View>

                    <Text style={{position:'absolute',fontSize:10, fontWeight:'100', left:WIDTH*0.8389, width:WIDTH*0.11,top:'12.19%',height:HEIGHT*0.02,color:'#8c8c8c', fontWeight:'300'}}>{chatroom&&chatroom.created_on.slice(11,16)}</Text>
                  </TouchableOpacity>

                ))}
                  

              </ScrollView>
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Chat;