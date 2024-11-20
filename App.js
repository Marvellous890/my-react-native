import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        // tabBarShowLabel: false,
        tabBarActiveTintColor: "purple"
      }}>
        <BottomTabs.Screen name="Course List" component={CourseListScreen}/>
        <BottomTabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My profile",
            tabBarIcon: ({color}) => <Ionicons name="person" size={20} color={color}/>,
            tabBarBadge: 3,
          }}
        />
        <BottomTabs.Screen name="Settings" component={SettingsScreen}/>
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}
