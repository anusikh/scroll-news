import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Share,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Footer = ({ data }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${data.url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(data.url);
          }}
        >
          <LinearGradient colors={["#7F0AC9", "#6B70D1"]} style={styles.button}>
            <Icon name="logo-chrome" type="ionicon" size={30} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onShare}>
          <LinearGradient colors={["#7F0AC9", "#6B70D1"]} style={styles.button}>
            <Icon
              name="share-social-outline"
              type="ionicon"
              size={30}
              color="white"
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: Dimensions.get("screen").width,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    margin: 5,
    width: Dimensions.get("window").width / 5,
  },
});
