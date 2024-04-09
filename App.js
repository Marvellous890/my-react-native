import {View, StatusBar, Button} from "react-native";
import {useState} from "react";

export default function App() {
  const [statusBarVisible, setStatusBarVisible] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: "plum", padding: 60}}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden={statusBarVisible}/>
      <Button title={"Toggle Status Bar Visibility"} onPress={() => setStatusBarVisible(!statusBarVisible)}/>
    </View>
  )
}