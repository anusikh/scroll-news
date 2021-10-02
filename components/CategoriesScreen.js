import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import CatBoxes from "./CatBoxes";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const SportsNavigate = () => {
    navigation.navigate("Sports");
  };

  const MedicineNavigate = () => {
    navigation.navigate("Medicine");
  };

  const ScienceNavigate = () => {
    navigation.navigate("Science");
  };

  const TechsNavigate = () => {
    navigation.navigate("Tech");
  };

  const GlobalNavigate = () => {
    navigation.navigate("Global");
  };

  const FinancesNavigate = () => {
    navigation.navigate("Finance");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CatBoxes
          ficon={
            <Icon
              name="football-outline"
              type="ionicon"
              size={100}
              color="white"
            />
          }
          sicon={
            <Icon name="cash-outline" type="ionicon" size={100} color="white" />
          }
          faction={SportsNavigate}
          saction={FinancesNavigate}
        />
        <CatBoxes
          ficon={
            <Icon
              name="bandage-outline"
              type="ionicon"
              size={100}
              color="white"
            />
          }
          sicon={
            <Icon
              name="flask-outline"
              type="ionicon"
              size={100}
              color="white"
            />
          }
          faction={MedicineNavigate}
          saction={ScienceNavigate}
        />
        <CatBoxes
          ficon={
            <Icon name="tv-outline" type="ionicon" size={100} color="white" />
          }
          sicon={
            <Icon
              name="globe-outline"
              type="ionicon"
              size={100}
              color="white"
            />
          }
          faction={TechsNavigate}
          saction={GlobalNavigate}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}> Select one of the categories</Text>
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    alignContent: "center",
  },
  header: {
    marginTop: 40,
  },
  footer: {
    display: "flex",
    marginTop: 100,
    alignItems: "center",
  },
  footerText: {
    fontWeight: "bold",
  },
});
