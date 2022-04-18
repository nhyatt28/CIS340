import react from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {
  let pic = {uri: "https://pngimg.com/uploads/dog/dog_PNG50321.png"};
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
     <Image source= {pic}
     style={{width: 200, height: 300}}
     />
     <Text> Hello, this is my dog!</Text>
    </View>
  );
}


