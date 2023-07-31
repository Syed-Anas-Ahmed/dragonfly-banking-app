import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";


const DATA = [
  {
    id: "1",
    image: require("../assets/CardFinal.png"),
    title: "Saving Balance",
    Amount: "$ 1,000.00",
  },
  {
    id: "2",
    image: require("../assets/CardFinal.png"),
    title: "Investment Balance",
    Amount: "$ 1,500.00",
  },
  {
    id: "3",
    image: require("../assets/CardFinal.png"),
    title: "Family Balance",
    Amount: "$ 10,000.00",
  },
  {
    id: "4",
    image: require("../assets/CardFinal.png"),
    title: "Personal Balance",
    Amount: "$ 500.00",
  },
];

const PocketList = () => {


  const groupedData = [];
  for (let i = 0; i < DATA.length; i += 2) {
    const item1 = DATA[i];
    const item2 = DATA[i + 1];
    groupedData.push([item1, item2]);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {groupedData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.amount}>{item.Amount}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'column',
    paddingHorizontal:10
  },
  rowContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  image: {
    borderRadius: 10,
    alignSelf: "center",
    width: "100%",
    height: 120,
  },
  title: {
   // fontfamily: "Poppins",
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: "gray",
  },
  amount: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 20,
    color: "#05be71"
  },
});

export default PocketList;