// const sam = useSelector((state) => state.news.crypto.data);

import React, { useCallback } from "react";
import { FlatList, Dimensions, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CryptoTrackerComponent() {
  const data = useSelector((state) => state.news.crypto.data);

  const Card = React.memo(function Card({ data }) {
    return (
      <LinearGradient
        colors={["#7F0AC9", "#6B70D1"]}
        style={styles.cardContainer}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardHeader}>{data.symbol}</Text>
          <Text style={styles.cardPrice}>
            {`$` + Number.parseFloat(data.quote.USD.price).toFixed(2)}
          </Text>

          <Text
            style={
              data.quote.USD.percent_change_24h > 0 ? styles.green : styles.red
            }
          >
            <Icon
              name={
                data.quote.USD.percent_change_24h > 0
                  ? "caret-up-outline"
                  : "caret-down-outline"
              }
              type="ionicon"
              size={11}
              style={styles.icon}
              color={data.quote.USD.percent_change_24h > 0 ? "#AAFF00" : "red"}
            />

            {Math.abs(data.quote.USD.percent_change_24h)}
          </Text>
        </View>
      </LinearGradient>
    );
  });

  const renderItem = useCallback(function renderItem({ item }) {
    return <Card data={item && item} />;
  }, []);

  return (
    <FlatList
      data={data?.slice(0, 5)}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth / 2.5,
    backgroundColor: "red",
    height: windowHeight / 8,
    marginLeft: 10,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    width: windowWidth / 3,
    height: windowHeight / 10.5,
  },
  cardHeader: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  cardPrice: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  green: {
    marginTop: 8,
    color: "#AAFF00",
  },
  red: {
    marginTop: 8,
    color: "red",
  },
  icon: {
    marginRight: 4,
  },
});
