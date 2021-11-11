import React from 'react';
import{
    StyleSheet, Text, View, TouchableOpacity, Dimensions, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Satisfaction = (props) => {

   closeModal = (bool,data) => {
      props.changeModalVisible(bool);
      props.setData(data);
  }

  return (

    <View style={{width: WIDTH *0.7777, height: WIDTH*0.7777, backgroundColor:'#ffffff',borderWidth:2, borderColor:'#e58bff',borderRadius:15, alignItems:'center',flexDirection:'column',justifyContent:'space-between',
                   position:'absolute', left:WIDTH*0.1111, top:HEIGHT*0.1511}}>
     
      <Text style={{position:'absolute', top:WIDTH*0.1231,fontWeight:'700', fontSize:15, color:'#000000'}}>해당 답변이 도움이 되었나요?</Text>
      
      <View style={{borerWidth:2, borderColor:'#0000ff',position:'absolute', top:WIDTH*0.2434,left: WIDTH*0.047,height:WIDTH*0.14,width:WIDTH*0.6833,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:WIDTH*0.08, height:WIDTH*0.08 ,borderRadius:30 }}></View><Text style={{marginTop:10}}>아쉬운 답변</Text></TouchableOpacity>
       
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:WIDTH*0.08, height:WIDTH*0.08 ,borderRadius:30 }}></View><Text style={{marginTop:10}}>보통</Text></TouchableOpacity>
        
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:WIDTH*0.08, height:WIDTH*0.08 ,borderRadius:30 }}></View><Text style={{marginTop:10}}>필요한 답변</Text></TouchableOpacity>
      </View>
      <View style={{position:'absolute',top:WIDTH*0.274, left:WIDTH*0.15,flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:WIDTH*0.4777, height:5}}></View><Text style={{marginTop:10}}></Text></View>




      <TouchableOpacity style={{position:'absolute',top:WIDTH*0.454,left:WIDTH*0.319,  width:WIDTH*0.411,backgroundColor:'#f4e8ff', borderRadius:25, height: WIDTH*0.0615, alignItems:'center', justifyContent:'center'}}><Text style={{color:'#000000',fontSize:10,color:'#696969' }}>멘토에게 추가 리워드 지급</Text></TouchableOpacity>


      <View style={{position:'absolute', top:WIDTH*0.5803,width:WIDTH*0.5888,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

        <TouchableOpacity style={{ width:WIDTH*0.25, height:WIDTH*0.095, backgroundColor:'#727272', alignItems:'center',justifyContent:'center', borderRadius:4}}
                onPress={()=> closeModal(false, 'Cancel')}>
                    <Text style={{color:'#ffffff', fontSize:14,fontWeight:'600', marginHorizontal:20}}>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width:WIDTH*0.25, height:WIDTH*0.095, backgroundColor:'#f34242', alignItems:'center',justifyContent:'center', borderRadius:4}}
                       onPress={()=> closeModal(false, 'Ok')}>
                    <Text style={{color:'#ffffff',fontSize:14,fontWeight:'600', marginHorizontal:20}}>제출하기</Text>
        </TouchableOpacity>

      </View>

    </View>



  )
}

export default Satisfaction;