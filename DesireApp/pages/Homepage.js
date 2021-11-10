import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, ScrollView,View, Text, TouchableOpacity} from 'react-native';

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
  height: ${WIDTH*0.3639};
  width: ${WIDTH*0.3639-10};
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
const PartDate = styled.Text`
  position: absolute;
  left: 50%;
  top: 74.3%;
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

function Homepage(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <View style={{position:'absolute', top:HEIGHT*0.0357,left:WIDTH*0.1111, flexDirection:'row',justifyContent:'space-between', width:WIDTH*0.8078, alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'800',color:'#000000',width:WIDTH*0.22}}>DESIRE</Text>
                <TouchableOpacity style={{height:'100%', width:40}} onPress={()=>{ props.navigation.navigate("MentorBoard")}}><Image resizeMode="contain" style={{flex:1}} source={require('../constants/images/homepage/notifications_24px.png')}/></TouchableOpacity>
              </View>

              <Text style={{position:'absolute', top:HEIGHT*0.1014, left:WIDTH*0.1111,color:'#929292', fontSize:14,fontWeight:'500'}}>닉네임님, 환영합니다.</Text>
              <View style={{position:'absolute', left:WIDTH*0.1111,top:HEIGHT*0.1457,width:WIDTH*0.7778, height: WIDTH*0.5444, flexDirection:'column',borderRadius:16,borderWidth:1, borderColor:'#ebebeb', backgroundColor:'#ffffff'}}>
                  <Text style={{position:'absolute', top:'11%', left:'7.14%',fontSize:16,fontWeight:'bold',color:'#2c2c2c'}}>디자인 일을 하며 생긴 어려움</Text>
                  <Text style={{position:'absolute', top:'25.5%', left:'7.14%',fontSize:14,fontWeight:'normal',color:'#5f5f5f'}}>일을하며 생긴 어려움 바로 멘토님에게! </Text>
                  <Text style={{position:'absolute', top:'35.5%', left:'7.14%',fontSize:14,fontWeight:'normal',color:'#5f5f5f'}}>마음 편하게 언제 어디든 질문하세요.</Text>

                  <TouchableOpacity style={{position:'absolute', top:'51.6%', left:'7.14%',backgroundColor:'#952bff', borderRadius:4,justifyContent:'center',width:WIDTH*0.2987,height:WIDTH*0.1049}} onPress={()=>{props.navigation.navigate("Questions")}}>
                      <BText>질문하기</BText>
                  </TouchableOpacity>

                  <Image resizeMode="contain" source={require('../constants/images/homepage/group2173.png')} style={{position:'absolute', top:'51.6%', left:'57.14%'}}/>
               
              </View>

               
              <TouchableOpacity style={{position:'absolute', left:WIDTH*0.1111,top:HEIGHT*0.4514 , width: WIDTH*0.3, height:HEIGHT*0.033}}><Text style={{fontSize:16,fontWeight:'normal',fontWeight:'500',color:'#000000'}}>내가 한 질문</Text></TouchableOpacity>
         

 
                <ScrollView horizontal={true} style = {{position:'absolute',left:WIDTH*0.1111, top:HEIGHT*0.4943, height:WIDTH*0.3639}} > 
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하여여쭤보겠</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하여여쭤보겠</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하여여쭤보겠</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하여여쭙겠습니다</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하여여쭙겠습니다</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하여여쭙겠습니다</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                </ScrollView>
             



              <TouchableOpacity style={{position:'absolute', left:WIDTH*0.1111,top:HEIGHT*0.7185, width: WIDTH*0.3, height:WIDTH*0.3639}}><Text style={{fontSize:16,fontWeight:'normal',fontWeight:'500',color:'#000000'}}>1대1 채팅</Text></TouchableOpacity>

                <ScrollView horizontal={true} style = {{position:'absolute',left:WIDTH*0.1111, top:HEIGHT*0.7643, height:HEIGHT*0.2}} > 
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하..</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하..</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하..</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하..</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                  <Part onPress={()=>{props.navigation.navigate("Reply")}}><PartTitle numberOfLines={2} ellipsizeMode="tail">어도비 XD 사용 방법과 관련하..</PartTitle><PartReply>답장 3개</PartReply><PartDate>21.10.23</PartDate></Part>
                </ScrollView>
          


            </Contents>
        </Background>
      </Container>
    
    )
}


export default Homepage;