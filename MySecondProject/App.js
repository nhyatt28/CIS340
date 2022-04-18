import { StatusBar } from 'expo-status-bar';
import { Text,TextInput, View } from 'react-native';

function MyApp() {  
  const pet = "Dog";
  return (
    <View>
      <Text>
        Hello I am a student in CIS340!
        </Text>
     </View>
  );
}

export default function MultiComp() {
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text>
      Welcome To My Class </Text>
      <MyApp/>
      <MyApp/>
      <MyApp/>
      <MyApp/>
    </View>
  )
}

