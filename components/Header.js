import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Logo from "../assets/Dragon.svg" 
import Trans from "../assets/Translate.svg"

const Header = () => {
  return (
    <View style={styles.header}>
    <Logo width={40} height={40}/>
    <Trans width={40} height={40}/>
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