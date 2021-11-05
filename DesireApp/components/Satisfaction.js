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

    <View style={{width: WIDTH - 80, height: (HEIGHT/10 *4), backgroundColor:'#ffffff',borderWidth:2, borderColor:'#e58bff',borderRadius:15, alignItems:'center',flexDirection:'column',justifyContent:'space-between',
                   position:'absolute', left:40, top:(HEIGHT/10 *2)}}>
     
      <Text style={{fontWeight:'700', fontSize:18, color:'#000000', marginTop:20}}>해당 답변이 도움이 되었나요?</Text>
      
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:WIDTH - 145}}>
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:50, height:50 ,borderRadius:50 }}></View><Text style={{marginTop:10}}>아쉬움</Text></TouchableOpacity>
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:50, height:7}}></View><Text style={{marginTop:10}}></Text></View>
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:50, height:50 ,borderRadius:50 }}></View><Text style={{marginTop:10}}>보통</Text></TouchableOpacity>
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:50, height:7}}></View><Text style={{marginTop:10}}></Text></View>
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}><View style={{backgroundColor:'#dddddd', width:50, height:50 ,borderRadius:50 }}></View><Text style={{marginTop:10}}>좋았음</Text></TouchableOpacity>
      </View>


      <View style={{flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
        <View ></View>
        <View style={{backgroundColor:'#f4e8ff', borderRadius:11, height: 40, alignItems:'center', justifyContent:'center'}}><Text style={{marginHorizontal:10}}>멘토에게 추가 리워드 지급</Text></View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

        <TouchableOpacity style={{ height:50, backgroundColor:'#727272', alignItems:'center',justifyContent:'center',marginRight:20, marginBottom:20, borderRadius:10}}
                onPress={()=> closeModal(false, 'Cancel')}>
                    <Text style={{color:'#ffffff', fontSize:16,fontWeight:'500', marginHorizontal:20}}>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ height:50, backgroundColor:'#f34242', alignItems:'center',justifyContent:'center',marginBottom:20, borderRadius:10}}
                       onPress={()=> closeModal(false, 'Ok')}>
                    <Text style={{color:'#ffffff',fontSize:16,fontWeight:'500', marginHorizontal:20}}>제출하기</Text>
        </TouchableOpacity>

      </View>

    </View>



  )
}

export default Satisfaction;