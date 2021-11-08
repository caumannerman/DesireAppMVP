import React,{useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { resolvePreset } from '@babel/core';
import { Alert } from 'react-native';


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

const Image = styled.Image`
  resizeMode: contain;
  
`;


const ScrollView = styled.ScrollView`
  flex: 1;               
  flex-diection: column;
  border: #999999;
`;

const RowBox = styled.View`
  width: 100%;
  height: 132px;

  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;

const Part = styled.TouchableOpacity`
  height: 132px;
  width: 132px;
  border: #c0c0c0;
  border-radius: 16px;
  margin-right: 4%;
  margin-left: 4%;
  background: #ffffff;
  border: #d0d0d0;
  flex-direction: column;
  justify-content: center;
 
  

`;
const PartDate = styled.Text`
  color: #838383;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 10px;
  left: 10%;
`;

const PartTitle = styled.Text`
  color: #000000;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  left: 10%;
  width: 100px;
  
`;
const PartReply = styled.Text`
  color: #952bff;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  left: 10%;
`;



function MyQuestion(props){

  const [data, setData] = useState([{title:"FirTitle"}]);
 // loading
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/questions',{
      method:"GET"
    })
    .then(resp => resp.json())
    .then(data => {
      setData(data)
      setLoading(false)
    }).catch(error => Alert.alert("error", JSON.stringify(error)))
  }, [])

    return(
    
      <Container>
        <Background colors={['#ffffff', '#cffafa','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>내가 한 질문{data[0].title}{data.count}</Title>
                <Glass><Image source={require('../constants/images/homepage/glasses.png')}/></Glass>
              </TitleView>

              <ScrollView>
                  <RowBox>
                    <Part  onPress={() => {props.navigation.navigate("Reply")}}>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                  </RowBox>
                  <RowBox>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                  </RowBox>
                  <RowBox>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                  </RowBox>
                  <RowBox>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                  </RowBox>
                  <RowBox>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                  </RowBox>
                  <RowBox>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                    <Part>
                      <PartDate>21.07.23</PartDate><PartTitle>어도비 XD 사용 방법과 관련하여 질문 드립니다.</PartTitle><PartReply>답장 3개</PartReply>
                    </Part>
                  </RowBox>
              </ScrollView>

            </Contents>
        </Background>
      </Container>
    
    )
}



export default MyQuestion;

