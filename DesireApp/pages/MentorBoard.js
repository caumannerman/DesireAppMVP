import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity,Dimensions, ScrollView,FlatList} from 'react-native'
import produce from 'immer';
import QuestionService from '../services/QuestionService';
import useAuth from '../services/useAuth';

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
  const {getAuth} = useAuth();
   const [userId, setUserId] = useState();
   
  const [lastChoice, setLastChoice] = useState('UI/UX');

  const [categories, setCategories] = useState([
    {category: 'UIUX', value: 'UI/UX', isCheck: false,key:1},
    {category: 'BIBX', value: 'BI/BX', isCheck: false,key:2},
    {category: '제품디자인', value: '제품디자인', isCheck: false,key:3},
    {category: '시각디자인', value: '시각디자인', isCheck: false,key:4},
  ]);
   //lastChoice가 바뀔 때마다 load해와서 렌더링 해줘야한다. 
   const [questionList, setQuestionList] = useState([]);

   const fetchQuestionList = async (tempUserId) => {
     const lastC = lastChoice;
     await QuestionService.getList({
       offset: 0,
       limit: 1000,
       ordering: '-created_on',
       categoryNamesIn: lastC
     }).then(res => {
       setQuestionList(res.data.results);
       console.log(res.data.results);
     });
   };

  useEffect(() => {
    (async ()=> {
      const  {userId} = await getAuth();
      setUserId(userId);
      const tempUserId = userId;
      await fetchQuestionList(tempUserId);
    })();
   
  },[lastChoice] );


    return(
    
      <Container>
        <Background colors={['#fffafa', '#e9fafa','#ffffff']}start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>

              <View style={{position:'absolute', left:'7%', top:HEIGHT*0.044, width:'50%'}}>
                <Text style={{fontSize:20, fontWeight:'600', color:'#000000'}}>질문 게시판</Text>
              </View>
              
              <View style={{position:'absolute', top:HEIGHT*0.1068,width:'100%', height:HEIGHT*0.095, alignItems:'center',justifyContent:'center', flexDirection:'row',borderWidth:0.2, borderColor:'#838383'}}>
                <View style={{width:'30%', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:14, fontWeight:'400', color:'#000000'}}>카테고리 선택</Text></View>
                <ScrollView  style={{ height:'100%'}}  horizontal={true}>
                 
                  {categories.map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      setCategories(
                        produce(categories, draft => {
                          const index = categories.indexOf(item);
                          if(!draft[index].isCheck){
                            draft[0].isCheck = false;
                            draft[1].isCheck = false;
                            draft[2].isCheck = false;
                            draft[3].isCheck = false;
                            draft[index].isCheck = true;
                            setLastChoice(draft[index].value);
                          }
                          else{
                            draft[index].isCheck = !categories[index].isCheck;
                            alert("유지");             
                          }
                          
                        }),
                      );
                    }}
                    style={{ height:41, marginLeft:15, borderRadius:20, backgroundColor: item.isCheck ? '#952bff' : '#e5e5e500', alignItems:'center', justifyContent:'center', alignSelf:'center'}}
                    >
                      <Text style={{
                      fontSize: 14,
                      color: item.isCheck ? '#ffffff' : '#000000',
                      fontWeight: item.isCheck ? 'bold' : '300',
                      marginHorizontal: 10,
                    }}>{item.category}</Text>
                  </TouchableOpacity>
                  ))}

                </ScrollView>
              </View>
              <View style={{  top:HEIGHT*0.2019,width:'100%',height:'100%'}}>
              <ScrollView style={{ flex:1}}>
                {questionList.map(question => (
                  <TouchableOpacity style={{backgroundColor: '#ffffff', borderWidth: 1, borderColor:'#d0d0d0', width:WIDTH*0.9135, height:HEIGHT*0.16,
                            left:WIDTH*0.0432, flexDirection:'column', borderRadius:12, marginTop:15, justifyContent:'center'}}
                                    onPress={()=>{props.navigation.navigate("MentorBoardDetail", {questionid:question.id})}}>
                    
                    <View style={{ width:WIDTH*0.85,height:HEIGHT*0.035, left:WIDTH*0.03, marginBottom: HEIGHT*0.01, flexDirection:'row', alignItems:'center'}}>
                      <ScrollView horizontal={true} style={{ flexDirection:'row'}}>
                      {question.categories.map(qcategory => (
                        <View style={{ height:HEIGHT*0.035,  marginRight:4, borderRadius:14, backgroundColor:'#952bff', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:10.5, color:'#ffffff', fontWeight:'bold', marginHorizontal:5}}>{qcategory}</Text></View>
                      ))}
                        </ScrollView>
                      <Text style={{fontSize:10, fontWeight:'300',color:'#000000'}}>{question&&question.updated_on&&question.updated_on.slice(2,10)}</Text>
                    </View>

                    <View style={{ left:WIDTH*0.03, width:WIDTH*0.7166, marginBottom: HEIGHT*0.007}}><Text style={{fontSize:14,fontWeight:'bold',color:'#000000'}}>{question.title}</Text></View>
                    <View style={{ left:WIDTH*0.03, width:WIDTH*0.65}}><Text style={{fontSize:12,fontWeight:'300',color:'#000000'}}>{question.question_text}</Text></View>

                  </TouchableOpacity>
                ))}
                
              </ScrollView>
              </View>
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorBoard;