import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Course List" component={CourseListScreen}/>
        <BottomTabs.Screen name="Profile" component={ProfileScreen}/>
        <BottomTabs.Screen name="Settings" component={SettingsScreen}/>
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}
