import {
  FlatList,
  SafeAreaView, StatusBar,
  StyleSheet, View, Text, ActivityIndicator, TextInput, Button
} from "react-native";
import {useEffect, useState} from "react";

export default function App() {
  const [postList, setPostList] = useState()
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState("")


  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(`https://asdjsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: " + error)
      setLoading(false)
      setError("Failed to fetch post list")
    }
  }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20).then(() => setRefreshing(false));
  }

  const addPost = async () => {
    setIsPosting(true)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          // userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
      setError("")
    } catch (error) {
      console.error("Error adding new post: " + error)
      setError("Failed to add new post")
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (<View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>) :
        (<>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Post title"
                value={postTitle}
                onChangeText={setPostTitle}
              />
              <TextInput
                style={styles.input}
                placeholder="Post body"
                value={postBody}
                onChangeText={setPostBody}
              />
              <Button
                title={isPosting ? "Posting..." : "Post"}
                onPress={addPost}
                disabled={isPosting}
              />
            </View>
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
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            </View>
          </>
        )}
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    padding: 8
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center'
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: 'center'
  }
})
