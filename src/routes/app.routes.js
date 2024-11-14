import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../pages/Home/MainTabScreen";

const Tab = createBottomTabNavigator();

export default function AppRoutes({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Tab.Navigator
        initialRouteName="Início"
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "black",
          labelStyle: {
            fontSize: 12,
            top: -5,
          },
          style: {
            backgroundColor: "white",
            position: "absolute",
            height: 55,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
          },
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <MaterialCommunityIcons
                  name="home"
                  color={focused ? "black" : "grey"}
                  size={30}
                />
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </>
  );
}
