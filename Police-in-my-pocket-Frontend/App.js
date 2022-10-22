import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./src/screen/MainScreen";
import Login from "./src/screen/LoginScreen";
import Signup from "./src/screen/SignupScreen";
import Menu from "./src/screen/MenuScreen";
import Find from "./src/screen/FindScreen";
import MyPage from "./src/screen/MyPageScreen";
import EditInfo from "./src/screen/EditinfoScreen";
import EditPw from "./src/screen/EditPwScreen";
import Location from "./src/screen/LocationInformScreen";
import ReportModal from "./src/component/ReportModal";
import Address from "./src/screen/AddressScreen";

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false,}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false,}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false,}}/>
        <Stack.Screen name="Find" component={Find} options={{headerShown: false,}}/>
        <Stack.Screen name="Location" component={Location} options={{headerShown: false,}}/>
        <Stack.Screen name="ReportModal" component={ReportModal} options={{headerShown: false,}}/>
        <Stack.Screen name="MyPage" component={MyPage} options={{headerShown: false,}}/>
        <Stack.Screen name="EditInfo" component={EditInfo} options={{headerShown: false,}}/>
        <Stack.Screen name="EditPw" component={EditPw} options={{headerShown: false,}}/>
        <Stack.Screen name="Address" component={Address} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}