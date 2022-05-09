import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  

  return (
    <View style={styles.container}>

      <View style = {styles.counterText}> 

        <Image source = {{uri : "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Rams-Logo-Reversed-one-color-768x769.jpeg"}}
               style = {styles.logo}/>
        <Text style = {styles.insts}>
          Press the button below to select an image on your phone!
        </Text>

      </View>

      <TouchableOpacity
        style = {styles.button} onPress = {() => alert("You have not selected an image yet!")}
        >

        <Text style = {styles.buttonText}>
          Pick Image
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'lightblue',
    justifyContent: 'center',
    alignItems : 'center',
    paddingHorizontal : 20,

  },

button : {

  justifyContents : 'center',
  alignItems : 'center', 
  backgroundColor : 'lightgreen',
  padding : 20,
  borderRadius : 10,
  marginTop : 20

},


insts : {

  fontSize : 18, 
  color : 'black',
  marginBttom : 15,
  marginHorizontal : 10,

},

logo : {
  width : 400,
  height : 500,
  marginBottom : 20,

},

buttonText : {
  fontSize : 20, 
  color : 'black'
}

});
