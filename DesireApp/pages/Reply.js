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






function Reply(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>받은답장</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}>
                  <Text style={{color: '#000000', fontSize: 15, fontWeight: '800', textAlign: 'center'}}>이전</Text>
                </BackButton>
              </TitleView>
 
              <View style={{height:'27%', width: '100%', backgroundColor:'#ffffff', alignItems: 'center', justifyContent: 'center', borderColor:'#d0d0d0', borderWidth: 2}}>
                
                <View style={{width: '80%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                  <Text style={{fontWeight: '800', fontSize: 16, color:'#000000'}}>질문의 제목</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 12, color:'#000000'}}>21.07.23</Text>
                </View>

                <View style={{ width:'77%', height: '45%'}}>
                  <Text style={{fontWeight: '300', fontSize: 12, color:'#000000'}} numberOfLines={4} ellipsizeMode="tail">로렘 입숨(LOREM IPSUM; 줄여서 립숨,LIPSUM)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적......</Text>
                </View>


                <TouchableOpacity>
                  <Text style={{color: '#000000'}}>내가 한 질문 더보기 +</Text>
                </TouchableOpacity>
              </View>



              <Text style={{ fontSize: 20, fontWeight:'500', textAlign:'center', marginTop: '5%'}}>받은 답장 리스트</Text>

              <ScrollView style={{ borderWidth: 1,borderColor: '#d0d0d0', width:'100%', height:'100%', marginTop: 7}}>
                
                
                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:'85%',marginLeft:'7.5%', marginTop:20, height:91,flexDirection:'row', alignItems:'center'}}
                                  onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </TouchableOpacity>



              </ScrollView>
            

              


              
             


            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Reply;