import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CatButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Categories");
      }}
    >
      <LinearGradient colors={["#7F0AC9", "#6B70D1"]} style={styles.button}>
        <Text style={styles.text}>Categories</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CatButton;

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "white",
    padding: 10,
  },
});
