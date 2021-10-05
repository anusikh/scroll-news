import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useDispatch } from "react-redux";
import { getNews } from "../redux/reducer";
import NewsCarouselItems from "./NewsCarouselItems";
import { useSelector } from "react-redux";

const articles = [
  {
    status: "SEEN",
    title: "Reference form received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Producsts",
      refType: "Trade",
      refCompanyName: "Metals Depot",
    },
  },
  {
    status: "SEEN",
    title: "Reference form received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Productsss",
      refType: "Trade",
      refCompanyName: "Metals Depot",
    },
  },
  {
    status: "SEEN",
    title: "Reference form received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
      refType: "Bank",
      refCompanyName: "Metals Depot",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
      refType: "Bank",
      refCompanyName: "Metals Depot",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "NOT_SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
  {
    status: "SEEN",
    title: "New Application Received",
    createdTime: new Date(),
    notificationData: {
      customerName: "Roseburg Forest Products",
    },
  },
];

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = React.useState();
  const dispatch = useDispatch();

  const x = useSelector((state) => state.news.news);

  React.useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <View style={styles.carousel}>
      {x ? (
        <Carousel
          layout={"stack"}
          data={x?.articles?.slice(0, 10)}
          sliderHeight={300}
          itemHeight={Dimensions.get("window").height}
          vertical={true}
          renderItem={(item) => <NewsCarouselItems item={item} />}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      ) : (
        //TODO: add circular loading
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "grey",
  },
});
