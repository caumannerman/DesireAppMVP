import React, {useState,useEffect} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import SimpleModal from '../components/SimpleModal';
import produce from 'immer';
import QuestionService from '../services/QuestionService';
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

  margin-bottom: 5px;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  font-style: normal;
  margin-bottom: 10;
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

const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  justify-content: center;
  margin-bottom: 10;
`;

function Questions(props) {
  const {getAuth} = useAuth();
  const [userId, setUserId] = useState();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState('');
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionText, setQuestionText] = useState('');

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  const setData = (data) => {
    setchooseData(data);
  };

  const [categories, setCategories] = useState([
    {category: 'UIUX', value: 'UI/UX', isCheck: false, key:1},
    {category: 'BIBX', value: 'BI/BX', isCheck: false, key:2},
    {category: '???????????????', value: '???????????????', isCheck: false, key:3},
    {category: '???????????????', value: '???????????????', isCheck: false, key:4},
  ]);

  const onSubmit = async () => {
    const selectedCategoryNames = categories
      .filter(category => category.isCheck)
      .map(selectedCategory => selectedCategory.value);
    
      if(selectedCategoryNames.length==0){selectedCategoryNames.push('UI/UX')};
      console.log("lll");
      console.log(selectedCategoryNames);

    await QuestionService.create({
      userId: userId,
      title: questionTitle,
      questionText,
      categories: selectedCategoryNames,
      uploadedImageId: photo?.id,
      uploadedVideoId: video?.id,
      uploadedAudioId: audio?.id,
      uploadedFileId: document?.id

    }).then(() => {
      changeModalVisible(true);
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
    console.log(categories
      .filter(category => category.isCheck)
      .map(selectedCategory => selectedCategory.value));
    }, [categories,photo,video,document,audio]);

  return (
    <Container>
      <Background
        colors={['#ffffff', '#f8ecec', '#ffffff']}
        start={{x: 0.3, y: 0.3}}
        end={{x: 1.2, y: 1.2}}
        locations={[0, 0.3, 0.7]}>
        <Contents>
          <TitleView>
            <Title>????????????</Title>
            <BackButton onPress={()=>{props.navigation.navigate("HomeStack")}}>
                  <Text style={{color: '#000000', fontSize: 15, fontWeight: '800', textAlign: 'center', marginRight:10}}>??????</Text>
                </BackButton>
          </TitleView>

          <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e5e5e5',
                borderWidth: 0.4,
                borderColor: '#838383',
              }}>
              <Text>??????</Text>
            </View>
            <TextInput
              placeholder="    ?????? ??????"
              style={{
                borderWidth: 3,
                borderColor: '#ff0000',
                width: '70%',
                borderWidth: 0.4,
                borderColor: '#838383',
              }}
              value = {questionTitle}
              onChangeText={text => setQuestionTitle(text)}></TextInput>
          </View>

          <View
            style={{
              width: '100%',
              height: 65,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#e5e5e5',
              borderWidth: 0.2,
              borderColor: '#838383',
            }}>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>???????????? ??????</Text>
            </View>
            <ScrollView style={{height: '100%'}} horizontal={true}>
              {categories.map(item => (
                <TouchableOpacity
                  onPress={ () => {
                    setCategories(
                      produce(categories, draft => {
                        const index = categories.indexOf(item);
                        draft[index].isCheck = !categories[index].isCheck;
                        console.log(draft[index].isCheck);

                      }),
                    );
                    
                  }}
                  style={{
                    height: 41,
                    marginTop: 12,
                    marginLeft: 15,
                    borderRadius: 20,
                    backgroundColor: item.isCheck ? '#952bff' : '#e5e5e5',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: item.isCheck ? '#ffffff' : '#000000',
                      fontWeight: item.isCheck ? 'bold' : '300',
                      marginHorizontal: 10,
                    }}>
                    {item.category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={{width: '100%', height: 30, flexDirection: 'row'}}>
            <Text
              style={{
                marginLeft: 10,
                width: WIDTH * 0.25,
                alignSelf: 'center',
              }}>
              ????????? ??????:
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

          <View
            style={{
              borderWidth: 0.4,
              borderColor: '#a0a0a0',
              width: '100%',
              height: '35%',
              alignItems: 'center',
            }}>
            <TextInput
              style={{width: '90%', height: '100%'}}
              placeholder={`????????? ????????? ??????????????????
-??????????????? ????????? ????????? ?????? ??????????????? ???????????????
-????????? ????????? ??????/????????? ???????????????.
-?????? ????????? ????????? ???????????? ??????????????? ?????????????????????.
                `}
              value={questionText}
              onChangeText={text => setQuestionText(text)}></TextInput>
          </View>

          <File>
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
                      /* ?????? ???????????? ????????? ????????? ?????? */
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
              <FileText>??????</FileText>
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
                    /* ?????? ???????????? ????????? ????????? ?????? */
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
              <FileText>?????????</FileText>
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
              <FileText>??????</FileText>
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
              <FileText>??????</FileText>
            </FileOpacity>
          </File>



          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              marginTop: 30,
              backgroundColor: '#952bff',
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onSubmit}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ffffff'}}>
              ?????????
            </Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible}
            onDismiss={() => alert({chooseData})}>
            <SimpleModal
              style={{alignItems: 'center', justifyContent: 'center'}}
              changeModalVisible={changeModalVisible}
              setData={setData}
              navigation={props.navigation}
            />
          </Modal>
        </Contents>
      </Background>
    </Container>
  );
}

export default Questions;