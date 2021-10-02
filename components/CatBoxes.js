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
            onPress={i === 1 ? props.faction : props.saction}
          >
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
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
  button: {
    width: 200,
    height: 200,
    borderRadius: 30,
    margin: 10,
    justifyContent: "center",
  },
});
