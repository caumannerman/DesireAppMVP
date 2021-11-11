import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Text, Image, TouchableOpacity, View, ScrollView, Modal, Dimensions} from 'react-native';
import SimpleModal from '../components/SimpleModal';
import produce from 'immer';

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
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }

  const setData = (data) => {
    setchooseData(data);
  }

  const [list, setList] = useState([
    {category: 'UIUX', isCheck: false},
    {category: 'BIBX', isCheck: false},
    {category: '제품디자인', isCheck: false},
    {category: '시각디자인', isCheck: false},
  ]);


    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>질문하기</Title>
              </TitleView>

              <View style={{width:'100%', height:40, flexDirection:'row'}}>
                <View style={{width:'30%', alignItems:'center', justifyContent:'center', backgroundColor:'#e5e5e5', borderWidth:0.4, borderColor:'#838383'}}><Text>제목</Text></View>
                <TextInput placeholder="    제목 입력"  style={{borderWidth:3, borderColor:'#ff0000', width:"70%",borderWidth:0.4, borderColor:'#838383'}}></TextInput>
              </View>


              <View style={{width:'100%', height:65,alignItems:'center', flexDirection:'row', backgroundColor:'#e5e5e5', borderWidth:0.2, borderColor:'#838383'}}>
                <View style={{width:'30%', alignItems:'center', justifyContent:'center'}}><Text>카테고리 선택</Text></View>
                <ScrollView  style={{ height:'100%'}}  horizontal={true}>
                  
                  {list.map( item =>
                              <TouchableOpacity onPress={()=>{ setList( produce( list, draft =>{
                                  const index = list.indexOf(item);
                                  draft[index].isCheck = !list[index].isCheck;

                              }))}} style={{ height:41,marginTop:12, marginLeft:15, borderRadius:20, backgroundColor:(item.isCheck?'#952bff':'#e5e5e5'), alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:14, color:(item.isCheck?'#ffffff':'#000000'), fontWeight:(item.isCheck?'bold':'300'), marginHorizontal:10}}>{item.category}</Text>
                              </TouchableOpacity>
                          )}
                </ScrollView>
              </View>

              <View style={{borderWidth:0.4, borderColor:'#a0a0a0', width:'100%', height:'35%', alignItems:'center'}}>
                <TextInput style={{ width:'90%',height:'100%'}} placeholder={`궁금한 내용을 질문해주세요 
-명확한상황 설명과 받고자 하는 답변내용을 적어주세요
-질문을 보내면 수정/삭제가 불가합니다.
-모든 이미지 파일은 안전하게 워터마크가 부착되어집니다.
                `} numberOfLines={4} ellipsizeMode="tail"></TextInput>
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
              
              <TouchableOpacity style={{width:'80%', height:40,marginTop:30,backgroundColor:'#952bff', borderRadius:4 , alignItems:'center', justifyContent:'center'}}
                                onPress={()=>{changeModalVisible(true)}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'#ffffff'}}>보내기</Text>
              </TouchableOpacity>

           
              <Modal 
                transparent={true} animationType='slide' visible={isModalVisible}
                onRequestClose={() => changeModalVisible(false)}
               
                >
                <SimpleModal style={{alignItems:'center', justifyContent:'center'}}
                  changeModalVisible={changeModalVisible}
                  setData={setData}/>
              </Modal>
           

            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Question;