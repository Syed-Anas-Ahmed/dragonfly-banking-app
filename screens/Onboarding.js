import {StyleSheet, Text,View, TouchableOpacity,} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Welcome from "../components/Welcome";
import Header from "../components/Header";

const Onboarding = () => {
    const navigator = useNavigation();

    const [loaded] = useFonts({
        Poppins: require("../assets/fonts/Poppins-BoldItalic.ttf"),
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    })
    if (!loaded) {
        return null;
    }
  return (
    <View style={styles.container}>
      <Header />

      <Welcome />
      <TouchableOpacity style={styles.btn} onPress={()=>navigator.navigate("Login")}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom:10,
    alignItems:"center"
  },
  card: {
    resizeMode: "contain",
  },
  footer: {
    alignItems: "center",
  },
  btn:{
    justifyContent:"center",
    alignSelf:"center",
    height:40,
    width:"93%",
  backgroundColor: "#05be71",
  borderRadius: 7,
  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontFamily:"PoppinsMedium",
    fontSize: 16,  
}
});