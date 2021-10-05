import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const NewsCarouselItems = ({ item }) => {
  const data = item.item;

  return (
    <View
      style={{
        height: Dimensions.get("window").height - 55,
        width: Dimensions.get("window").width,
        backgroundColor: "white",
        transform: [{ scaleY: -1 }],
      }}
    >
      <Text>
        {data.author}
        {data.content}
        {data.description}
      </Text>
    </View>
  );
};

export default NewsCarouselItems;

const styles = StyleSheet.create({});
