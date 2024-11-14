import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";

const ProfileStack = createStackNavigator();

const MainTabScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
        headerStyle: {
          height: 50,
        },
      }}
    >
      <ProfileStack.Screen
        name="Home"
        options={{
          title: "Início",
          headerShown: false,
        }}
        component={Home}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;
