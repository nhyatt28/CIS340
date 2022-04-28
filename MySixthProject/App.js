import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const CSULogo  = {
    uri : "https://logos-download.com/wp-content/uploads/2019/11/Colorado_State_University_Logo-559x700.png",
  }

  return (
    <View style={styles.container}>
       <ImageBackground source = {CSULogo} style = {styles.image}>
    
        <Text style = {styles.text}>CSU Logo</Text>

        </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',
   
  },

  image: {
    flex : 1,
    resizeMode : 'cover',
    justifyContent : 'center'
  },

  text: {
    color : 'red',
    fontSize : 50,
    fontWeight : 'bold'
  }
});
