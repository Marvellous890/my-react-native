import {View, ActivityIndicator} from "react-native";

export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: "plum", padding: 60}}>
      <ActivityIndicator/>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="large" color="midnightblue"/>
      <ActivityIndicator size="large" color="midnightblue" animating={false}/>
    </View>
  )
}