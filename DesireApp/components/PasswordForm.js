import React from 'react';
import{Text, View, TouchableOpacity, Dimensions, Button, Image} from 'react-native';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PasswordForm = (props) => {

   closeModal = (bool) => {
      props.changeModalVisible(bool);
  }

  return (

    <TouchableOpacity style={{width: WIDTH *0.7777, height: WIDTH*0.37, backgroundColor:'#ffffff',borderWidth:2, borderColor:'#f34e4e',borderRadius:2, alignItems:'center',flexDirection:'column',
                   position:'absolute', left:WIDTH*0.1111, top:HEIGHT*0.101}}
                   onPress={()=>{closeModal(false)}}>
      <Image source={require('../constants/images/warn.png')} style={{top:'25%'}}/>
      <Text style={{position:'absolute', top:'47%',fontWeight:'700', fontSize:14, color:'#f34e4e',width:WIDTH*0.50, textAlign:'center'}}>8자 이상, 영문자 + 숫자 조합으로{"\n"}만들어 주세요</Text>

      
    </TouchableOpacity>



  )
}

export default PasswordForm;