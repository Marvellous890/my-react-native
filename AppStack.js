import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import {Pressable, Text, View} from "react-native";

const Stack = createNativeStackNavigator()

export const AboutStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#6a51ae"
      },
      headerTintColor: "white",
      headerTitle: {
        fontWeight: "bold"
      },
      headerRight: () => (
        <Pressable onPress={() => alert("Menu button pressed")}>
          <Text style={{color: "white", fontSize: 16}}>Menu</Text>
        </Pressable>
      ),
      contentStyle: {
        backgroundColor: "#e8e4f3"
      }
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Welcome home",
      }}/>
    <Stack.Screen
      name="About"
      component={AboutScreen}
      initialParams={{
        name: "Guest"
      }}
      /*options={({route}) => ({
        title: `About ${route.params.name}`
      })}*//>
  </Stack.Navigator>
)

export default function AppStack() {
  return (
    <NavigationContainer>
      <AboutStack/>
    </NavigationContainer>
  )
}
