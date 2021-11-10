import React, {useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View, TouchableOpacity, Text, TextInput} from 'react-native';
import produce from 'immer';

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

const Title = styled.Text`
  font-weight:600;
  font-size: ${WIDTH * 0.073}px;
  color: #000000;  
`;

const ButtonText = styled.Text`
  
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  font-weight: bold;
  font-style: normal;
  text-align: center;  
`;

const CheckView = styled.ScrollView`
  width: 74%;
  border: #ff0000;
  background: #ffffff;
  border-radius: 2px;
  border: #d0d0d0;
`;


function Profile(props){
   const [isPhoto, setPhoto] = useState(false);
   const changePhoto = (bool) => {
    setPhoto(bool);
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

                <View style={{position:'absolute',left:"11.11%",top:HEIGHT*0.075 ,width:'22%', height:'5.9%', alignItems:'center',justifyContent:'center'}}>
                    <Title>프로필</Title>
                </View>

                <TouchableOpacity style={{borderWidth:1,borderColor:'#d0d0d0',position:'absolute',top:HEIGHT*0.1614, left:'36.66%',alignItems:'center', justifyContent:'center', width:'26.66%', height:(WIDTH*0.2666),
                          borderRadius:50,backgroundColor:'#e3e3e3',alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../constants/images/EmptyProfile.png')} style={{ width:'100%', height:'100%',resizeMode:'contain',borderRadius:50}}/>
                </TouchableOpacity>
                <Text style={{position:'absolute', top:HEIGHT*0.315, left:WIDTH*0.408,textAlignVertical:'center',textAlign:'center', color:'#000000',width:WIDTH*0.184,fontSize:WIDTH*0.035}}>프로필 사진</Text>
               
                <View style={{position:'absolute', top: HEIGHT*0.3771, left:'11.11%', width:'77.77%', flexDirection:'column', height:HEIGHT*0.335 }}>
                  
                  <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', marginBottom:HEIGHT*0.015, alignContent:'center',justifyContent:'center'}}>
                    <Text style={{height:HEIGHT *0.06,width:'26%', color:'#000000',fontSize:14,lineHeight:20,textAlignVertical:'center',fontWeight:'500'}}>닉네임</Text>
                    <TextInput placeholder="     입력" style={{height:HEIGHT*0.06, width:'74%', backgroundColor:'#ffffff', borderWidth:1,borderColor:'#d0d0d0'}}></TextInput>
                  </View>

                  <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between',alignContent:'center',justifyContent:'center'}}>
                    <Text style={{height:HEIGHT *0.06,width:'26%', color:'#000000',fontSize:14,lineHeight:20,fontWeight:'500'}}>디자인분야</Text>
                    
                    <CheckView style={{height: HEIGHT*0.26}}>
                          
                          <TouchableOpacity style={{height:10}}></TouchableOpacity>

                         
                          {list.map( item =>{
                            return(
                              <TouchableOpacity onPress={()=>{ setList( produce( list, draft =>{
                                  const index = list.indexOf(item);
                                  draft[index].isCheck = !list[index].isCheck;

                              }))}} style={{flexDirection:'row', width:'100%',height:HEIGHT *0.06, alignContent:'center', justifyContent:'space-between'}}>
                                <Text style={{fontSize:14, fontWeight:'500',color:'#425466', textAlignVertical:'center',alignSelf:'center' }}>      {item.category}</Text>
                                <Image style={{width: HEIGHT* 0.025, height:HEIGHT *0.025,  alignSelf:'center', marginRight:25, opacity:(item.isCheck?10:0)}}  source={require('../constants/images/check.png')}></Image> 
                              </TouchableOpacity>
                            )
                          })}

                    </CheckView>
                  </View>
                </View>

                <TouchableOpacity style={{position:'absolute',top:HEIGHT*0.762,left:'11.11%', alignItems:'center', justifyContent:'center', backgroundColor:'#f34e4e',borderRadius:4,height:HEIGHT*0.057, width:'77.77%'}}>
                    <ButtonText>시작하기</ButtonText>
                </TouchableOpacity>


              

            </Contents>
        </Background>
      </Container>
    
    )
}

const Button = styled.TouchableOpacity`
  
  align-items: center;
  justify-content: center;
  background-color: #f34e4e;

  border-radius: 4px;
  height: 40px;
  width: 100%;
  margin-top: 20px;
`;



export default Profile;