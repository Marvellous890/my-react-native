import {View, Text, StyleSheet } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBg, styles.box]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: "pink",
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
})
