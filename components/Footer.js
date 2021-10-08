import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Share,
  Linking,
} from "react-native";
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
          <Icon name="open-outline" type="ionicon" size={50} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onShare}>
          <Icon
            name="share-social-outline"
            type="ionicon"
            size={50}
            color="grey"
          />
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
    height: 70,
    width: Dimensions.get("window").width / 3,
  },
});
