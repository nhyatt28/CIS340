import React from 'react';
import {Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: "https://pngimg.com/uploads/dog/dog_PNG50321.png",
  width: 64,
  height: 64
};

export default MyScrollViewApp = () => ( 
    

    <ScrollView style = {{padding: 40}}>
      <Text style = {{fontSize: 100}}> Try to scroll down</Text>
      <Image source = {require('./assets/dog.png')} style = {{width: 64, height: 64}}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Text style = {{fontSize: 100}}> Try to scroll down again if you like</Text>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Text style = {{fontSize: 100}}> Try to scroll down again if you like</Text>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Text style = {{fontSize: 100}}> Try to scroll down again if you like</Text>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Text style = {{fontSize: 100}}> Try to scroll down again if you like</Text>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
    </ScrollView>
  );



