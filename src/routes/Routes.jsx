import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Detail } from "../views/index.js";

// Crea el stack navigator
const Stack = createNativeStackNavigator();

const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)",
  },
  headerTitleStyle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
  headerTintColor: "white",
};

// Componente principal que contiene la navegación
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
