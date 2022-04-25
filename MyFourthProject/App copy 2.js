import React, {Component, useState} from 'react';
import {Text, TextInput, View } from 'react-native';

export default function WordConvertor() {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 80}}>
     <TextInput
     style = {{height: 80}}
     placeholder="Input your text here!"
     onChangeText={text => setText(text)}
     defaultValue={text}
     />
     
     <Text style={{padding: 100, fontSize: 100}}>
      {text.split(' ').map((word) => word && '*').join(' ')}
     </Text>

    </View>
  );

}

