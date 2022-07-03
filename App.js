import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import CardScreen from "./src/screens/CardScreen";
import THEME from "./src/theme";

const Stack = createNativeStackNavigator();

async function loadApplication() {
  await Font.loadAsync({
    "mont-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "mont-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            title: "Gallery",
            headerStyle: {
              backgroundColor: THEME.MAIN_COLOR,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{
            title: "Image",
            headerStyle: {
              backgroundColor: THEME.MAIN_COLOR,
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
