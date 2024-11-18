import {
  Button,
  Image,
  KeyboardAvoidingView, Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";
import {useState} from "react";

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={Platform.OS === 'ios'? 100 : 0}>
      <View style={styles.form}>
        <Image source={require('./assets/adaptive-icon.png')} style={styles.image}/>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => alert('Login')}/>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  }
})
