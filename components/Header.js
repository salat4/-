import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style = {styles.headerContainer}>
      <Text style = {styles.headerTile}>Your notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    width:"100%",
    height:"13%",
    backgroundColor: Platform.OS === "android" ? "black" : "white",
    paddingTop:30,
  },
  headerTile:{
    color:Platform.OS === "android" ? "white" : "yellow",
    fontSize:30,
    fontWeight:"bold",
    padding:10,
    marginTop:10,
  }

})