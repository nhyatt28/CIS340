import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is Required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri : pickerResult.uri});


  };

  let openSharingDialogAsync = async () => {
    if ( (!await Sharing.isAvailableAsync())) {
      alert("Sharing is not available on my phone")
      return;
    }
    Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style = {styles.container}>
        <Image source = {{uri : selectedImage.localUri}} style = {styles.selImage}/>
        <TouchableOpacity onPress = {openSharingDialogAsync} style = {styles.button}>
          <Text style = {styles.buttonText}>  Share My Photo </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.button} onPress = {openImagePickerAsync} >

        <Text style = {styles.buttonText}>
          Pick Image
        </Text>

      </TouchableOpacity>
      </View>
     
    )
  }

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
        style = {styles.button} onPress = {openImagePickerAsync} >

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
  marginBottom : 15,
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
},

selImage : {
  height : 500,
  width : 500,
  resizeMode : 'contain'
}

});
