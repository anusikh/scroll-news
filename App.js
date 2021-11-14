import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import CategoriesScreen from "./components/CategoriesScreen";
import CatButton from "./components/CatButton";
import FinanceScreen from "./components/CategoryScreens/FinanceScreen";
import MedicScreen from "./components/CategoryScreens/MedicScreen";
import ScienceScreen from "./components/CategoryScreens/ScienceScreen";
import SportsScreen from "./components/CategoryScreens/SportsScreen";
import GlobalScreen from "./components/CategoryScreens/GlobalScreen";
import TechScreen from "./components/CategoryScreens/TechScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

const headerStyle = {
  backgroundColor: "black",
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => <CatButton />,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Finance"
            component={FinanceScreen}
            options={{
              headerRight: () => <CatButton />,
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Medicine"
            component={MedicScreen}
            options={{
              headerRight: () => <CatButton />,
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Science"
            component={ScienceScreen}
            options={{
              headerRight: () => <CatButton />,
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Sports"
            component={SportsScreen}
            options={{
              headerRight: () => <CatButton />,
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Tech"
            component={TechScreen}
            options={{
              headerRight: () => <CatButton />,
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Global"
            component={GlobalScreen}
            options={{
              headerRight: () => <CatButton />,
              headerLeft: () => <></>,
              headerStyle: headerStyle,
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
