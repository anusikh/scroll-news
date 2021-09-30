import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, StyleSheet } from "react-native";

const CatButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.button}
      title="Categories"
      color="#000"
      onPress={() => navigation.navigate("Categories")}
    />
  );
};

export default CatButton;

const styles = StyleSheet.create({
  button: {},
});
