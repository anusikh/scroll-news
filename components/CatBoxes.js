import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const CatBoxes = (props) => {
  return (
    <View style={styles.container}>
      {[1, 2].map((i) => {
        return (
          <TouchableOpacity
            key={i}
            styles={styles.touch}
            onPress={i === 1 ? props.faction : props.saction}
          >
            <LinearGradient
              colors={["#7F0AC9", "#6B70D1"]}
              style={styles.button}
            >
              {i === 1 ? props.ficon : props.sicon}
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CatBoxes;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  touch: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 30,
    margin: 10,
    justifyContent: "center",
  },
});
