import React, {useState,useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Text, Image, TouchableOpacity, View, Dimensions} from 'react-native';
import AnswerService from '../services/AnswerService';
import UploadedAudioService from '../services/UploadedAudioService';
import UploadedImageService from '../services/UploadedImageService';
import UploadedFileService from '../services/UploadedFileService';
import UploadedVideoService from '../services/UploadedVideoService';
import useAuth from '../services/useAuth';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as mime from 'react-native-mime-types';
import {hasExtension} from '../services/utils';


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



function MentorReply(props){

   

  
  const [answerText, setAnswerText] = useState('');
  const {getAuth} = useAuth();
  const [userId, setUserId] = useState();
  
  const onSubmit = async () => {

    await AnswerService.create({
      userId: userId,
      content: answerText,
      questionId: props.route.params.questionid,
      uploadedImageId: photo?.id,
      uploadedVideoId: video?.id,
      uploadedAudioId: audio?.id,
      uploadedFileId: document?.id
    }).then(() => {
      alert("전송하였습니다");
      setAnswerText('');
      props.navigation.navigate("HomeStack");
    });
  };
  
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  const [document, setDocument] = useState(null);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    (async () => {
      const {userId} = await getAuth();
      setUserId(userId);
    })();
    
  }, [photo,video,document,audio]);


  
    return(
    
      <Container>
        <Background colors={['#ffffff','#f8ecec','#ffffff']} start={{x: 0.3, y: 0.3}} end={{x: 1.2, y: 1.2}} locations={[0,0.3,0.7]} >
            <Contents>


              <TitleView>
                <Title>답변하기s</Title>
                <BackButton onPress={()=>{props.navigation.goBack()}}><BackText>이전</BackText></BackButton>
              </TitleView>
              
              <View style={{width: '100%', height: 30, flexDirection: 'row',borderWidth:1,borderColor:'#929292'}}>
            <Text
              style={{
                marginLeft: 10,
                width: WIDTH * 0.25,
                alignSelf: 'center',
                
              }}>
              첨부된 파일:
            </Text>
            {[photo, video,document,audio].map(
              media =>
                media && (
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="middle"
                    style={{flex: 1, alignSelf: 'center'}}>{`${
                    media && media.name ? media.name : ''
                  }`}</Text>
                ),
            )}
          </View>
              
              <View style={{borderWidth:0.4, borderColor:'#a0a0a0', width:'100%', height:'35%', alignItems:'center'}}>
                <TextInput style={{ width:'90%',height:'100%'}} placeholder="성실하게 답변해주세요" onChangeText={text => setAnswerText(text)} value={answerText}></TextInput>
              </View>
         
              <View style={{width:WIDTH, height: "15%", borderWidth:1, borderColor:'#d0d0d0', flexDirection:'row',alignItems:'center'}}>
              <FileOpacity
              onPress={async () => {
                await launchImageLibrary(
                  {
                    mediaType: 'photo',
                    quality: 1,
                    maxWidth: 300,
                    maxHeight: 300,
                    includeBase64: true,
                  },
                  async response => {
                    if (response && response.assets[0]) {
                      /* 파일 확장자가 없으면 붙여서 전송 */
                      let fileNameField = '';
                      let fileName = '';
                      if (hasExtension(response.assets[0].fileName)) {
                        fileNameField = response.assets[0].fileName;
                        fileName = response.assets[0].fileName;
                      } else {
                        fileNameField = `${
                          response.assets[0].fileName
                        }.${mime.extension(response.assets[0].type)}`;
                        fileName = `${
                          response.assets[0].fileName
                        }.${mime.extension(response.assets[0].type)}`;
                      }

                      await UploadedImageService.create({
                        name: fileNameField,
                        file: {
                          uri: response.assets[0].uri,
                          name: fileName,
                          type: response.assets[0].type,
                        },
                      }).then(res => setPhoto(res.data));
                    }
                  },
                );
              }}>
              <Image
                source={require('../constants/images/question/image.png')}
                resizeMode="contain"
              />
              <FileText>사진</FileText>
            </FileOpacity>

            <FileOpacity
              onPress={async () => {
                await launchImageLibrary(
                  {
                    mediaType: 'video',
                    quality: 1,
                    includeBase64: true,
                  },
                  async response => {
                    /* 파일 확장자가 없으면 붙여서 전송 */
                    let fileNameField = '';
                    let fileName = '';
                    if (hasExtension(response.assets[0].fileName)) {
                      fileNameField = response.assets[0].fileName;
                      fileName = response.assets[0].fileName;
                    } else {
                      fileNameField = `${
                        response.assets[0].fileName
                      }.${mime.extension(response.assets[0].type)}`;
                      fileName = `${
                        response.assets[0].fileName
                      }.${mime.extension(response.assets[0].type)}`;
                    }

                    if (response && response.assets[0]) {
                      await UploadedVideoService.create({
                        name: fileNameField,
                        file: {
                          uri: response.assets[0].uri,
                          name: fileName,
                          type: response.assets[0].type,
                        },
                      }).then(res => setVideo(res.data));
                    }
                  },
                );
              }}>
              <Image
                source={require('../constants/images/question/video.png')}
                resizeMode="contain"
              />
              <FileText>동영상</FileText>
            </FileOpacity>
            <FileOpacity
             onPress={async () => {
             
              const res = await DocumentPicker.pick(
                {
                  type: [DocumentPicker.types.plainText,
                    DocumentPicker.types.pdf,
                    DocumentPicker.types.zip,
                    DocumentPicker.types.csv,
                    DocumentPicker.types.doc,
                    DocumentPicker.types.docx,
                    DocumentPicker.types.ppt,
                    DocumentPicker.types.pptx,
                    DocumentPicker.types.xls,
                    DocumentPicker.types.xlsx,
                    DocumentPicker.types.images],
                });
                console.log(res[0].name);
                console.log("lslslls");
                
              
                if (res && res[0]) {
                  await UploadedFileService.create({
                    name: res[0].name,
                    file: {
                      uri: res[0].uri,
                      name: res[0].name,
                      type: res[0].type,
                    },
                  }).then(res => setDocument(res.data));
                }
              
              
            }}>
              <Image
                source={require('../constants/images/question/file.png')}
                resizeMode="contain"
              />
              <FileText>파일</FileText>
            </FileOpacity>
            <FileOpacity
            onPress={async () => {
             
              const res = await DocumentPicker.pick(
                {
                  type: [DocumentPicker.types.audio],
                });
                console.log(res[0].name);               
              
                if (res && res[0]) {
                  await UploadedAudioService.create({
                    name: res[0].name,
                    file: {
                      uri: res[0].uri,
                      name: res[0].name,
                      type: res[0].type,
                    },
                  }).then(res => setAudio(res.data));
                }
              
              
            }}>
              <Image
                source={require('../constants/images/question/voice.png')}
                resizeMode="contain"
              />
              <FileText>녹음</FileText>
            </FileOpacity>
              </View>
              
              <TouchableOpacity style={{width:'80%', height:40,marginTop:30,backgroundColor:'#952bff', borderRadius:4 , alignItems:'center', justifyContent:'center',top:40}}
                                onPress={()=>{onSubmit()}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'#ffffff'}}>보내기</Text>
              </TouchableOpacity>
            
            </Contents>
        </Background>
      </Container>
    
    )
}


export default MentorReply;