import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, Dimensions,ScrollView, Image, Modal} from 'react-native'

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

  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }

  const setData = (data) => {
    setchooseData(data);
  }
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
                    <Text style={{fontWeight:'600', fontSize:17, color:'#000000'}}>질문의 제목</Text>
                    <Text style={{fontWeight:'bold', fontSize:12, color:'#727272'}}>21.07.23</Text>
                  </View>

                  <ScrollView style={{width:'80%', marginTop:'10%'}}>
                    <Text style={{color:'#000000', fontWeight:'300',lineHeight:20}}>
                      로렘 입숨(LOREM IPSUM; 줄여서 립숨, LIPSUM)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피,레이아웃 같은 그래픽 요소나
                      시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인프로젝트
                      모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입을 그리킹(GREEKING)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 
                      무언가를 지칭하는 용어로도 사용된다.
                    </Text>
                  </ScrollView>

                </View>

                <TouchableOpacity style={{backgroundColor:'#952bff', width: '77.77%', height: '6.5%', borderRadius: 5, alignItems:'center', justifyContent:'center', marginTop:50}}
                                  onPress={()=>{props.navigation.navigate("MentorReply")}}>
                  <Text style={{color:'#ffffff', fontSize:19, fontWeight:'bold'}}>답변하기</Text>
                </TouchableOpacity>
              
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorBoardDetail;