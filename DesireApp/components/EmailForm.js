import React from 'react';
import{Text, View, TouchableOpacity, Dimensions, Button, Image} from 'react-native';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const EmailForm = (props) => {

   closeModal = (bool) => {
      props.changeModalVisible(bool);
  }

  return (

    <TouchableOpacity style={{width: WIDTH *0.7777, height: WIDTH*0.27, backgroundColor:'#ffffff',borderWidth:2, borderColor:'#f34e4e',borderRadius:2, alignItems:'center',flexDirection:'column',
                   position:'absolute', left:WIDTH*0.1111, top:HEIGHT*0.101}}
                   onPress={()=>{closeModal(false)}}>
      <Image source={require('../constants/images/warn.png')} style={{top:'25%'}}/>
      <Text style={{position:'absolute', top:'53%',fontWeight:'700', fontSize:14, color:'#f34e4e'}}>이메일 형식에 맞게 작성해주세요.</Text>
      
    </TouchableOpacity>



  )
}

export default EmailForm;