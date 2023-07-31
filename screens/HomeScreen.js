import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import Send from "../assets/money-send.png";
import Request from "../assets/money-recive.png";
import History from "../assets/receipt.png";
import HeaderMain from "../components/HeaderMain";
import Pocket from "./Pocket";
import PocketList from "../components/PocketList";

const HomeScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
const [pkrRate, setPkrRate] = useState(0);
const [eurRate, setEurRate] = useState(0);
const [aedRate, setAedRate] = useState(0);
const [inrRate, setInrRate] = useState(0);

const onRefresh = () => {

  fetchData();
  setRefreshing(false);

};

const fetchData = () => {

  const symbols = "EUR,AED,PKR,INR";
  const API_KEY = "8577bc51a7bb42c900e818a0dfeb49d8";
  const apiUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${symbols}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((responseData) => {
      const rates = responseData.rates;

      const eurRate = rates.EUR;
      setEurRate(eurRate);
      const aedRate = rates.AED;
      setAedRate(aedRate);
      const pkrRate = rates.PKR;
      setPkrRate(pkrRate);
      const inrRate = rates.INR;
      setInrRate(inrRate);
    })

    .catch((error) => console.error("Error fetching data:", error));
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.mainCont}>
      <StatusBar style="auto" />
      <HeaderMain />
      <ScrollView
        vertical
        contentContainerStyle={{ rowGap: 10, paddingBottom: 30 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.container}>
          <Text style={styles.balanceText}>Your Balance </Text>
          <View style={styles.bal}>
            <Text style={styles.amnt}>$ 49,259.00</Text>
            <AntDesign name="eyeo" size={24} color="black" />
          </View>
          <View style={styles.iconCont}>
            <View style={styles.iconBox}>
              <Image source={Send} style={{ height: 30, width: 30 }} />
              <Text style={styles.iconText}>Send</Text>
            </View>
            <View style={styles.iconBox}>
              <Image source={Request} style={{ height: 30, width: 30 }} />
              <Text style={styles.iconText}>Request</Text>
            </View>
            <View style={styles.iconBox}>
              <Image source={History} style={{ height: 30, width: 30 }} />
              <Text style={styles.iconText}>History</Text>
            </View>
          </View>
          <ImageBackground
            source={require("../assets/Gradient.png")}
            style={styles.cardContainer}
          >
            <TouchableOpacity style={styles.connRow}>
              <Feather
                style={{ alignSelf: "flex-end" }}
                name="x-square"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.connText}>
              <Text style={styles.hText}>Let's Connect</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.connText}>
              <Text style={styles.pText}>
                Connect account with marketplace for automatic payment and get
                $25 bonus
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.proceed}>
              <FontAwesome5
                style={{ alignSelf: "flex-end" }}
                name="long-arrow-alt-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.Pocket}>
          <View style={{ flexDirection: "row", alignItems: "stretch" }}>
            <Entypo name="wallet" size={30} color="#05be71" />
            <Text style={{ fontSize: 24, fontFamily: "PoppinsMedium" }}>
              {" "}
              My Pocket
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.CreateText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View></View>
        <PocketList />
        <View style={styles.Pocket}>
          <View style={{ flexDirection: "row", alignItems: "stretch" }}>
            <Ionicons name="logo-usd" size={30} color="#05be71" />
            <Text style={{ fontSize: 24, fontFamily: "PoppinsMedium" }}>
              {" "}
              Currency
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            borderWidth: 2,
            borderColor: "#ECECEC",
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                color: "#05be71",
                fontSize: 18,
                //gap: 10,
              }}
            >
              Currency
            </Text>
            <Text>EUR</Text>
            <Text>PKR</Text>
            <Text>AED</Text>
            <Text>INR</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                color: "#05be71",
                fontSize: 18,
              }}
            >
              Price
            </Text>
            <Text>1.00</Text>
            <Text>1.00</Text>
            <Text>1.00</Text>
            <Text>1.00</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                color: "#05be71",
                fontSize: 18,
              }}
            >
              Rates
            </Text>
            <Text>{eurRate}</Text>
            <Text>{pkrRate.toFixed(2)}</Text>
            <Text>{aedRate.toFixed(2)}</Text>
            <Text>{inrRate.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    paddingTop: 25,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  balanceText: {
    fontSize: 20,
    fontFamily: "PoppinsMedium",
    color: "#05be71",
  },
  amnt: {
    fontSize: 24,
    fontFamily: "PoppinsMedium",
  },
  bal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconCont: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ECECEC",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBox: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  cardContainer: {
    justifyContent: "space-between",
    marginVertical: 20,
    height: 140,
    width: "100%",
  },
  connRow: {
    top: 5,
    right: 5,
  },
  connText: {
    flexDirection: "row",
    paddingHorizontal: "7%",
  },
  hText: {
    color: "#7342FF",
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  pText: {
    color: "#9584C6",
    fontSize: 14,
    fontFamily: "PoppinsMedium",
  },
  proceed: {
    bottom: 5,
    right: 15,
  },
  Pocket: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  CreateText: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    color: "#05be71",
  },
});
