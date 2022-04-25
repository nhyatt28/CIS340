import React from 'react';
import {Text, View, SectionList } from 'react-native';



export default StatesApp = () => { 
  return (
    <View style = {{flex: 1, paddingTop: 2}}> 
      <SectionList 
        sections={[{title: 'A', data: ["Alabama", "Alaska", "Arizona", "Arkansas"]},
        {title: 'C', data: ["Colorado","California"]},
        {title: 'D', data: ["Delaware"]},

        ]}  
        renderItem = {({item}) => <Text style = {{padding: 10, fontSize: 20, height: 44}}> {item} </Text> }
        renderSectionHeader = {({section}) => <Text style = {{paddingTop: 4, paddingLeft: 10,
        paddingRight: 10,
        paddingLeft: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "green",}}>{section.title}</Text> }

        keyExtractor={(item,index) => index}
        />
    </View>
      

   
    
  );
}


