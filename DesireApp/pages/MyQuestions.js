import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  Image,
  Platform,
  FlatList,
} from 'react-native';
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

const TitleView = styled.View`
  flex-direction: row;
  top: 5%;
  
  align-items: center;
  height: 39px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom-color:#929292;
  border-bottom-width:0.5;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  align-items: center;
  justify-content: center;
  margin-left: ${WIDTH*0.1};
  margin-bottom: 7;
`;

const Glass = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 39px;
  margin-right: ${WIDTH*0.07};
  margin-bottom: 7;
`;

const Part = styled.TouchableOpacity`
  width: ${WIDTH * 0.3639};
  height: ${WIDTH * 0.3639};
  border: #c0c0c0;
  border-radius: 16px;
  background: #ffffff;
  border: #d0d0d0;
  flex-direction: column;
  justify-content: center;
  margin-horizontal: ${WIDTH*0.02305};
  margin-vertical: 15;
  left:${WIDTH*0.005};
  right: ${WIDTH*0.005};
  ${Platform.select({
    ios: {
      shadowColor: '#5a5a5a',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: {
        width: -1,
        height: 0,
      },
    },
    android: {
      elevation: 13,
    },
  })};
`;
const PartDate = styled.Text`
  position: absolute
  color: #838383;
  font-style: normal;
  font-weight: bold;
  width: ${WIDTH * 0.182};
  font-size: 12px;
  left: ${WIDTH * 0.0429};
  top: ${WIDTH * 0.04};
`;

const PartTitle = styled.Text`
  position: absolute
  color: #000000;
  font-style: normal;
  font-weight: 900;
  width: ${WIDTH * 0.28};
  height: ${WIDTH * 0.12};
  font-size: 16.5px;
  left: ${WIDTH * 0.0429};
  top: ${WIDTH * 0.12};
`;

const PartReply = styled.Text`
  width: ${WIDTH * 0.16};
  color: #952bff;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  left: ${WIDTH * 0.0429};
  top: ${WIDTH * 0.11};
`;

function MyQuestion(props) {
  const {getAuth} = useAuth();
   const [userId, setUserId] = useState(null);
   

  const [questionList, setQuestionList] = useState([]);

  const fetchQuestionList = async (tempUserId) => {
    
    await QuestionService.getList({
      offset: 0,
      limit: 1000,
      ordering: '-created_on',
      userId: tempUserId,
    }).then(res => {
      console.log(tempUserId);
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
   
   
   
  }, []);


  return (
    <Container>
      <Background
        colors={['#fff5ee', '#e9fafa', '#ffffff']}
        start={{x: 0.1, y: 0.3}}
        end={{x: 1.5, y: 1.2}}
        locations={[0, 0.3, 0.7]}>
        <Contents>
          <TitleView>
            <Title>내가 한 질문</Title>
            <Glass>
              <Image
                source={require('../constants/images/homepage/glasses.png')}
                resizeMode="contain"
              />
            </Glass>
          </TitleView>

          <FlatList
           style={{
            flex: 1,
       
            borderLeftWidth: (WIDTH*0.08),
            borderRightWidth: (WIDTH*0.08),
            borderColor: '#99999900',
            
            
          
          }}
            keyExtractor={(item) => item.id}
            data={questionList}
            renderItem={({item}) => (
              <Part
                onPress={() => {
                  const question_id = item.id;
                  props.navigation.navigate('Reply', {questionId:question_id});
                }}>
                 
                <PartDate>{item.created_on.substring(2,4)}.{item.created_on.substring(5,7)}.{item.created_on.substring(8,10)}</PartDate>
                <PartTitle numberOfLines={2} ellipsizeMode="tail">
                  {item.title}
                </PartTitle>
                <PartReply>답장 {item.answer_count}개</PartReply>
              </Part>
            )}
            numColumns={2}
          
          />
     
          

        </Contents>
      </Background>
    </Container>
  
  );
}

export default MyQuestion;
