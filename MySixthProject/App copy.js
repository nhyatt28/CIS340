import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const CSULogo  = {
    uri : "https://logos-download.com/wp-content/uploads/2019/11/Colorado_State_University_Logo-559x700.png",
  }

  return (
    <View style={styles.container}>
        <Image 
          style = {styles.localCSULogo}
          source = {require('./assets/CSULogo.png')}
        />

        <Image 
          style = {styles.urlCSULogo}
          source = {{
            uri : "https://logos-download.com/wp-content/uploads/2019/11/Colorado_State_University_Logo-559x700.png"
          }}
        />

        <Image 
          style = {styles.stretch}
          source = {CSULogo}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 50, 
  },

  localCSULogo: {
    width : 55,
    height : 65,
  },

  urlCSULogo: {
    width : 50,
    height : 50,
  },

  stretch : {
    width : 50,
    height : 200, 
    resizeMode : 'contain',   
  }
});
