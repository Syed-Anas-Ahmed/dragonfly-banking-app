import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Data from "../assets/Data";
import Carousel, { Pagination } from "react-native-snap-carousel";

const Welcome = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  renderCarouselItem = ({ item,index }) => {
    
    return (
      <View style={{flex:1,justifyContent:"space-between", paddingVertical:"10%"}}>
        <Image source={item.image} style={{width:"100%",resizeMode:"contain"}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      
    );
  };

  return (
    <>
    <Carousel
      data={Data}
      renderItem={this.renderCarouselItem}
      sliderWidth={300}
      itemWidth={300}
      pagingEnabled={true}
      onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
      dotsLength={Data.length}
      activeDotIndex={activeSlide}
      containerStyle={styles.paginationContainer}
      dotStyle={styles.paginationDot}
      inactiveDotStyle={styles.paginationInactiveDot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
      <Text style={styles.swipeText}>Swipe for more</Text>
    </>

  );
};

export default Welcome;

const styles = StyleSheet.create({
  cardImage: {
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "PoppinsMedium",
    textAlign: "center",
  },
  description: {
    color: "gray",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "PoppinsMedium",
  },
  swipeText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsMedium",
    paddingBottom: 20,
  },
});
