import {View, Text, StyleSheet } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
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
    width: 250,
    height: 250,
    padding: 10,
    backgroundColor: "pink",
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10
  }
})
