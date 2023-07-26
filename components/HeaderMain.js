import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Logo from "../assets/Dragon2.svg" 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.header}>
    <Logo width={100} height={30}/>  
    <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" />
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }
})