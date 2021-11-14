import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { dateUtil } from "../utility/utility";
import Footer from "./Footer";

const NewsCarouselItems = ({ item }) => {
  const data = item.item;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.urlToImage }} />

      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
      <Text style={styles.publishedAt}>{dateUtil(data.publishedAt)}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.footer}>
        <Footer data={data} />
      </View>
    </View>
  );
};

export default NewsCarouselItems;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: Dimensions.get("window").height - 55,
    width: Dimensions.get("window").width,
    backgroundColor: "black",
    transform: [{ scaleY: -1 }],
  },
  image: {
    padding: 0,
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 3,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "white",
  },
  author: {
    marginBottom: 2,
    color: "white",
  },
  publishedAt: {
    fontSize: 10,
    marginBottom: 5,
    color: "white",
  },
  footer: {
    position: "absolute",
    color: "white",
    bottom: 0,
  },
  description: {
    marginTop: 15,
    color: "white",
  },
});
