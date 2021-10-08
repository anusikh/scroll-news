import React from "react";
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSNews } from "../../redux/reducer";
import NewsCarouselItems from "../NewsCarouselItems";

const ScienceScreen = () => {
  const [activeIndex, setActiveIndex] = React.useState();
  const dispatch = useDispatch();

  const x = useSelector((state) => state.news.snews);

  React.useEffect(() => {
    dispatch(getSNews());
  }, []);

  return (
    <View style={styles.carousel}>
      {x ? (
        <Carousel
          layout={"default"}
          data={x?.articles?.slice(0, 40)}
          sliderHeight={300}
          itemHeight={Dimensions.get("window").height}
          vertical={true}
          renderItem={(item) => <NewsCarouselItems item={item} />}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      ) : (
        //TODO: add circular loading
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#192f6a" />
        </View>
      )}
    </View>
  );
};

export default ScienceScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "grey",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
