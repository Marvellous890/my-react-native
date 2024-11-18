import {
  FlatList,
  SafeAreaView, StatusBar,
  StyleSheet, View, Text
} from "react-native";
import {useEffect, useState} from "react";

export default function App() {
  const [postList, setPostList] = useState()

  const fetchData = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    setPostList(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{height: 16}}/>}
          ListEmptyComponent={() => <Text>No data</Text>}
          ListHeaderComponent={() => <Text style={{fontSize: 20, marginBottom: 16}}>Post List</Text>}
          ListFooterComponent={() => <Text style={{fontSize: 20, marginTop: 16}}>End of List</Text>}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: '#666',
  }
})
