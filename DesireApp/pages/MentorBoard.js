import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'

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






function MentorBoard(props){
    return(
    
      <Container>
        <Background colors={['#ffffff', '#cffafa','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>답변 게시판</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}>
                  <Text style={{color: '#000000', fontSize: 15, fontWeight: '800', textAlign: 'center'}}>이전</Text>
                </BackButton>
              </TitleView>
              
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


              <ScrollView style={{ width:'100%', height:'100%', marginTop: 7}}>
                
                
                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000'}}>저도 아웃소싱으로 작업을 해....</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000'}}>저도 아웃소싱으로 작업을 해....</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000'}}>저도 아웃소싱으로 작업을 해....</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ff80ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000'}}>저도 아웃소싱으로 작업을 해....</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000'}}>저도 아웃소싱으로 작업을 해....</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000'}}>저도 아웃소싱으로 작업을 해....</Text>
                  </View>
                </TouchableOpacity>


              </ScrollView>
            

              


              
             


            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorBoard;