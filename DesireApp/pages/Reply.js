import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, ScrollView, Image, Platform,Dimensions} from 'react-native'

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
  margin-top:20px;
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
      elevation: 15
    }
  })};
`;



function Reply(props){

  const [isQVisible, setQVisible] = useState(false);

  const changeQVisible = (bool) => {
    setQVisible(bool);
  }

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
                    <Text style={{fontWeight: '800', fontSize: 16, color:'#000000'}}>질문의 제목</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 12, color:'#000000'}}>21.07.23</Text>
                  </View>

                  <View style={{ width:'77%', height: '45%'}}>
                    <Text style={{fontWeight: '300', fontSize: 12, color:'#000000'}} numberOfLines={isQVisible?20:4} ellipsizeMode="tail">로렘 입숨(LOREM IPSUM; 줄여서 립숨,LIPSUM)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적 로렘 입숨(LOREM IPSUM; 줄여서 립숨,LIPSUM)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 </Text>
                  </View>


                  <TouchableOpacity  onPress={()=>changeQVisible(!isQVisible)}>
                    <Text style={{color: '#000000'}}>{isQVisible?'줄이기':'내가 한 질문 더보기 +'}</Text>
                  </TouchableOpacity>

              </View>



              <Text style={{ fontSize: 20, fontWeight:'500', textAlign:'center', marginTop: '5%', color:'#000000'}}>받은 답장 리스트</Text>

              <ScrollView style={{ borderWidth: 1,borderColor: '#d0d0d0', width:'100%', height:'100%', marginTop: 7}}>
                
                
                <ReplyButton   onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </ReplyButton>

                <ReplyButton onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </ReplyButton>

                <ReplyButton onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </ReplyButton>

                <ReplyButton  onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </ReplyButton>

                <ReplyButton onPress={()=>{props.navigation.navigate("ReplyDetail")}}>
                  
                  <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                    <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                  </View>
                  
                  <View style={{flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#000000', marginBottom:1}}>가상 사용자</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color:'#858585', marginBottom:5}}>4년차 / UX 디자이너</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal', color:'#000000', width:"85%"}} numberOfLines={1} ellipsizeMode="tail">저도 아웃소싱으로 작업을 해봤습니다. 두 번 정도</Text>
                  </View>
                </ReplyButton>



              </ScrollView>
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Reply;