import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigate = useNavigation();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.subtitle}>
          Enjoy all the features that make it easy for you to manage your
          finances
        </Text>
        <View style={{ paddingVertical: "20%" }}>
          <View style={styles.userField}>
            <AntDesign name="user" size={30} color="#05be71" />
            <TextInput style={styles.emBox} placeholder="Email/Username" />
          </View>
          <View style={styles.pwField}>
            <Ionicons name="key" size={30} color="#05be71" />
            <TextInput
              style={styles.pw}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View></View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate.navigate("TabNavigator")} style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.otherText}>Other</Text>

        <TouchableOpacity style={styles.googleBtn}>
          <Image
            source={require("../assets/search.png")}
            style={{ width: 16, height: 16, marginRight: 10 }}
          />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>

        <View style={styles.register}>
          <Text style={{fontFamily: "PoppinsRegular",}}>Don't have account?{" "}</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeContainer: {
    paddingTop:30,
  },
  container: {
    padding: "7%",
  },
  heading: {
    paddingVertical: 5,
    fontSize: 36,
    fontFamily: "PoppinsMedium",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
  userField: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  pwField: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  emBox: {
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#05be71",
    marginTop: 30,
    fontFamily: "PoppinsRegular",
  },
  pw: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#05be71",
    marginTop: 30,
    fontFamily: "PoppinsRegular",
  },
  forgot: {
    marginTop: 20,
    color: "#05be71",
    fontFamily: "PoppinsMedium",
    alignSelf: "center",
  },
  loginBtn: {
    backgroundColor: "#05be71",
    paddingVertical: "2%",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
  },
  otherText: {
    marginVertical: 10,
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
  },
  googleBtn: {
    borderColor: "#bdbdbd",
    borderWidth: 1,
    //backgroundColor:"white",
    paddingVertical: "2%",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PoppinsMedium",
  },
  googleText: {
    color: "black",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
  register: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 5,
    paddingVertical: 20,
  },
  registerText: {
    color: "#05be71",
    fontFamily: "PoppinsRegular",

  }
});
