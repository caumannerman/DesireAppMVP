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
  
`;

const TitleView = styled.View`
  flex-direction: row;
  
  top: 5%;
  left: 5%;
  align-items: center;
  height: 39px;
  width: 85%;
  justify-content: space-between;
  margin-bottom: 45px;

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



function Chat(props){
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>진행중인 채팅</Title>
                <Glass><Image source={require('../constants/images/homepage/glasses.png')}/></Glass>
              </TitleView>

              <ScrollView>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#e5e5e5', width:'100%',  height:91,flexDirection:'row', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate("ChatPrivate")}}>
                  
                    <View style={{borderWidth: 2 , borderColor:'#ffa0ff', height: 70, width: 70, borderRadius: 50, marginHorizontal: '5%'}}>
                      <Image source={require('../constants/images/homepage/human.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}></Image>
                    </View>
                  
                    <View style={{flexDirection: 'column' , width:'52%', height: 40}}>
                      <Text style={{fontSize: 18, fontWeight: '500', color:'#000000', marginBottom:7}}>가상 사용자</Text>
                      <Text style={{fontSize: 15, fontWeight: '500', color:'#858585', marginBottom:5}}>저도 아웃소싱으로 작업을 해봤어....저도 아웃소싱으로 해봤답니다</Text>
                    </View>

                    <Text style={{marginBottom:35, fontSize:14, fontWeight:'100'}}>오후 6:20</Text>
                    

                  </TouchableOpacity>




              </ScrollView>
            </Contents>
        </Background>
      </Container>
    
    )
}


export default Chat;