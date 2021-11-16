import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';
import {ActivityIndicator} from 'react-native';
import QuestionService from '../services/QuestionService';


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
  left: 5%;
  align-items: center;
  height: 39px;
  width: 85%;
  justify-content: space-between;
  margin-bottom: 25px;
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

const RowBox = styled.View`
  left: ${WIDTH * 0.1111};
  width: ${WIDTH * 0.7722};
  height: ${WIDTH * 0.3639};
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestionList = async () => {
    await QuestionService.getList({
      offset: 0,
      limit: 1000,
      ordering: '-created_on',
      userId: '8136385e-42af-493f-a938-f7b6fdc97e69',
    }).then(res => {
      setQuestionList(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    fetchQuestionList();
  }, []);

 

  return (
    <Container>
      <Background
        colors={['#ffffff', '#e9fafa', '#ffffff']}
        start={{x: 0.3, y: 0.3}}
        end={{x: 1.2, y: 1.2}}
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

          <ScrollView
            style={{
              flex: 1,
              flexDirection: 'column',
              borderWidth: 1,
              borderColor: '#999999',
            }}
            numColumns={2}>
            {questionList.map(question => (
              <RowBox>
                <Part
                  onPress={() => {
                    const question_id = question.id;
                    props.navigation.navigate('Reply', {questionId:question_id});
                  }}>
                   
                  <PartDate>{question.created_on.substring(2,4)}.{question.created_on.substring(5,7)}.{question.created_on.substring(8,10)}</PartDate>
                  <PartTitle numberOfLines={2} ellipsizeMode="tail">
                    {question.title}
                  </PartTitle>
                  <PartReply>답장 {question.answer_count}개</PartReply>
                </Part>
                <Part
                  onPress={() => {
                    const question_id = question.id;
                    props.navigation.navigate('Reply', {questionId:question_id});
                  }}>
                  <PartDate>{question.created_on.substring(2,4)}.{question.created_on.substring(5,7)}.{question.created_on.substring(8,10)}</PartDate>
                  <PartTitle numberOfLines={2} ellipsizeMode="tail">
                    {question.title}
                  </PartTitle>
                  <PartReply>답장 {question.answer_count}개</PartReply>
                </Part>
              </RowBox>
            ))}
          </ScrollView>

        </Contents>
      </Background>
    </Container>
  
  );
}

export default MyQuestion;
