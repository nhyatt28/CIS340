import { StatusBar } from 'expo-status-bar';
import { Text, } from 'react-native';

export default function MyApp() {

function getFullName(fName, mName, lName){
  return fName + " " + mName + " " + lName;
}

  const pet = "Dog";
  return (
    
      <Text>
        {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t"}
        Hello I am a student in CIS340! {"\n\t\t\t   "}
        My full name is {getFullName("Nicholas", "Ryan", "Hyatt")}  {"\n\t\t\t\t\t\t"}
        I have a {pet}!
        </Text>
     
  );
}


