import React from 'react';
import {Text, View, FlatList } from 'react-native';



export default StatesApp = () => { 
  return (
    <View style = {{flex: 1, paddingTop: 2}}> 
      <FlatList 
        data = {[
          {key: 'Alabama'},
          {key: 'Alaska'},
          {key: 'Arizona'},
          {key: 'Arkansas'},
          {key: 'California'},
          {key: 'Colorado'},
          {key: 'Delaware'},
          {key: 'Florida'},
          {key: 'Georgia'},
          {key: 'Hawaiia'}
          
        ]}
        renderItem = {({item}) => <Text style = {{padding: 50, fontSize: 80, height: 44}}> {item.key} </Text> }
        />
    </View>
      

   
    
  );
}


