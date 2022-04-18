import react from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My Name Is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
<View style = {{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <Text>
    Welcome to CIS 340!
  </Text>
  <Student name = 'Charles Cox'/>
  <Student name = 'Nick Hyatt'/>
  <Student name = 'Dani Michelson'/>
  <Student name = 'Mike Pratt'/>
</View>
  );
}
