import { StatusBar } from 'expo-status-bar';
import { Text,TextInput, View } from 'react-native';

export default function MyApp() {



  const pet = "Dog";
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t"}
        Hello I am a student in CIS340!
        </Text>
        <TextInput 
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1
        }}
        defaultValue="                                        Enter Your Input"/>
     </View>
  );
}

