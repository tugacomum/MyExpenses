import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import SignUp from "../pages/Auth/SignUpScreen";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <>
      <StatusBar
        backgroundColor={"#262626"}
        barStyle="auto"
        translucent={true}
      />
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Navigator>
    </>
  );
}
