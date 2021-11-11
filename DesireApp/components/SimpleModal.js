import React from 'react';
import{
    StyleSheet, Text, View, TouchableOpacity, Dimensions, Button
} from 'react-native';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SimpleModal = (props) => {

   closeModal = (bool,data) => {
      props.changeModalVisible(bool);
      props.setData(data);
  }

  return (

    <View style={{width: WIDTH *0.7777, height: WIDTH*0.7777, backgroundColor:'#ffffff',borderWidth:2, borderColor:'#e58bff',borderRadius:15, alignItems:'center',flexDirection:'column',justifyContent:'space-between',
                   position:'absolute', left:WIDTH*0.1111, top:(HEIGHT*0.15)}}>
      <View style={{height:(HEIGHT/20)}}></View>
      <Text style={{fontWeight:'500', fontSize:16}}>질문이 전송되었습니다.</Text>
      
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

        <TouchableOpacity style={{ height:45, backgroundColor:'#727272', alignItems:'center',justifyContent:'center',marginRight:20, marginBottom:30, borderRadius:6}}
                onPress={()=> closeModal(false, 'Cancel')}
         
                
                >
                    <Text style={{color:'#ffffff', fontSize:16,fontWeight:'500', marginHorizontal:25}}>홈으로</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ height:45, backgroundColor:'#f34242', alignItems:'center',justifyContent:'center',marginBottom:30, borderRadius:6}}
                       onPress={()=> closeModal(false, 'Ok')}>
                    <Text style={{color:'#ffffff',fontSize:16,fontWeight:'500', marginHorizontal:25}}>내 질문 보기</Text>
        </TouchableOpacity>

      </View>

    </View>



  )
}

export default SimpleModal;