import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity,Dimensions, ScrollView} from 'react-native'

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

function MentorBoard(props){
    return(
    
      <Container>
        <Background colors={['#fffafa', '#e9fafa','#ffffff']}start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>

              <View style={{position:'absolute', left:'7%', top:HEIGHT*0.044, width:'50%'}}>
                <Text style={{fontSize:20, fontWeight:'600', color:'#000000'}}>답변 게시판</Text>
              </View>
              
              <View style={{position:'absolute', top:HEIGHT*0.1068,width:'100%', height:HEIGHT*0.095, alignItems:'center',justifyContent:'center', flexDirection:'row',borderWidth:0.2, borderColor:'#838383'}}>
                <View style={{width:'30%', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, fontWeight:'400', color:'#000000'}}>카테고리 선택</Text></View>
                <ScrollView  style={{ height:'100%'}}  horizontal={true}>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>UIUX</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>BIBX</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>제품&산업</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                  <TouchableOpacity style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center', alignSelf:'center'}}><Text style={{fontSize:14, color:'#ffffff', fontWeight:'bold', marginHorizontal:10}}>툴 사용</Text></TouchableOpacity>
                </ScrollView>
              </View>

              <ScrollView style={{ position:'absolute', top:HEIGHT*0.2019,width:'100%', height:'100%'}}>
                
                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                           left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                  onPress={()=>{props.navigation.navigate("MentorBoardDetail")}}>
                  
                  <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                    <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>BIBX</Text></View>
                      <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>직장생활 대처</Text></View>
                    </ScrollView>
                    <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>3시간 전</Text>
                  </View>

                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>아웃소싱으로 개발자와 협력하신 디자이너 분</Text></View>
                  <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>혹시 회사에서 아웃소싱으로 개발자와 협력해보신 디자이너 분 계신가요? 코딩을 잘 모르는 상태에서...</Text></View>

                </TouchableOpacity>

                
                


              </ScrollView>
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorBoard;