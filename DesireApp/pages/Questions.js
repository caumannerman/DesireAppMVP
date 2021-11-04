import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TextInput, Text, Image, TouchableOpacity, View, ScrollView} from 'react-native';

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

  margin-bottom: 5px;
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





function Question(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>질문하기</Title>
              </TitleView>

              <View style={{width:'100%', height:40, flexDirection:'row'}}>
                <View style={{width:'30%', alignItems:'center', justifyContent:'center', backgroundColor:'#e5e5e5', borderWidth:0.4, borderColor:'#838383'}}><Text>제목</Text></View>
                <TextInput placeholder="    제목 입력" style={{borderWidth:3, borderColor:'#ff0000', width:"70%",borderWidth:0.4, borderColor:'#838383'}}></TextInput>
              </View>


              <View style={{width:'100%', height:65,alignItems:'center', flexDirection:'row', backgroundColor:'#e5e5e5', borderWidth:0.2, borderColor:'#838383'}}>
                <View style={{width:'30%', alignItems:'center', justifyContent:'center'}}><Text>카테고리 선택</Text></View>
                <ScrollView  style={{ height:'100%'}}  horizontal={true}>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>UIUX</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>BIBX</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>제품&산업</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                </ScrollView>
              </View>



              <View style={{borderWidth:0.4, borderColor:'#a0a0a0', width:'100%', height:'35%', alignItems:'center'}}>
                <TextInput style={{ width:'90%',height:'100%'}} placeholder="궁금한 내용을 질문해주세요 명확한상황 설명과 받고자 하는 답변내용을 적어주세요"></TextInput>
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
              
              <TouchableOpacity style={{width:'80%', height:40,marginTop:30,backgroundColor:'#952bff', borderRadius:4 , alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'#ffffff'}}>보내기</Text>
              </TouchableOpacity>


            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Question;