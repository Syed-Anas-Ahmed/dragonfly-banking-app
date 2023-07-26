import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Send from "../assets/money-send.png"
import Request from "../assets/money-recive.png"
import History from "../assets/receipt.png"
import HeaderMain from "../components/HeaderMain";
import { ImageBackground } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainCont}>
      <StatusBar style="auto" />
        <HeaderMain />
        <View style={styles.container}>
        <Text style={styles.balanceText}>Your Balance</Text>
        <View style={styles.bal}>
          <Text style={styles.amnt}>$ 49,259.00</Text>
          <AntDesign name="eyeo" size={24} color="black" />
        </View>
        <View style={styles.iconCont}>
          <View style={styles.iconBox}>
          <Image source={Send} style={{height:30,width:30}} />
            <Text style={styles.iconText}>Send</Text>
          </View>
          <View style={styles.iconBox}>
          <Image source={Request} style={{height:30,width:30}} />
            <Text style={styles.iconText}>Request</Text>
          </View>
          <View style={styles.iconBox}>
          <Image source={History} style={{height:30,width:30}} />
            <Text style={styles.iconText}>History</Text>
          </View>
        </View>
        <ImageBackground source={require("../assets/Gradient.png")} style={styles.cardContainer}>

          <TouchableOpacity style={styles.connRow}>
          <Feather style={{alignSelf:"flex-end"}} name="x-square" size={24} color="black" />
          </TouchableOpacity>
          

          <TouchableOpacity style={styles.connText}>
          <Text style={styles.hText}>Let's Connect</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.connText}>
          <Text style={styles.pText} >Connect account with marketplace for automatic payment and get $25 bonus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.proceed}>
          <FontAwesome5  style={{alignSelf:"flex-end"}} name="long-arrow-alt-right" size={24} color="black" />
          </TouchableOpacity>

        </ImageBackground>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainCont:{
    flex:1,
    flexDirection:"column",
    gap:10,
    paddingTop: 25,
    backgroundColor:"#fff"
  },
  container: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  balanceText:{
    fontSize: 20,
    fontFamily: "PoppinsMedium",
    color:"#05be71"
  },
  amnt:{
    fontSize: 24,
    fontFamily: "PoppinsMedium",
  },
  bal:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  iconCont:{
    padding:20,
    paddingHorizontal:30,
    marginTop: 20,
    borderWidth:2,
    borderRadius:10,
    borderColor:"#ECECEC",
    flexDirection:"row",
    justifyContent:"space-between",
    },
    iconBox:{
      alignItems:"center",
    },
  iconText:{
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    textAlign:"center"
  },
  Connect:
  {
    marginVertical:20,
    height:140,
    width:"100%",
  },
  cardContainer:{
    justifyContent:"space-between",
    marginVertical:20,
    height:140,
    width:"100%",
  },
  connRow:{
    top:5,
    right:5,
  },
  connText:{
    flexDirection:"row",
    paddingHorizontal:"7%",
  },
  hText:{
    color:"#7342FF",
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  pText:{
    color:"#9584C6",
    fontSize: 14,
    fontFamily: "PoppinsMedium",
  },
  proceed:{
    bottom:5,
    right:15,
  }
});
