import {SafeAreaView, ScrollView, StatusBar, Text, View} from "react-native";
import pokemonList from './data.json'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => (
          <View style={styles.card} key={pokemon.id}>
            <Text style={styles.cardText}>{pokemon.type}</Text>
            <Text style={styles.cardText}>{pokemon.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText: {
    fontSize: 30
  }
}
