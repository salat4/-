import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from '../constants/constants'
const HomeScreen = ({onExit}) => {
  return (
    <View style = {styles.container}>
      <Pressable onPress = {()=>{onExit(ScreenType.addNote)}}>
        <View style = {styles.itemButtons}>
          <Text style = {styles.title}>Add new note</Text>
          <Icon style = {styles.icon} name = "arrow-forward-outline"></Icon>
        </View>
      </Pressable>
      <Pressable onPress = {()=>{onExit(ScreenType.allNotes)}}>
        <View style = {styles.itemButtons}>
          <Text style = {styles.title}>View all note</Text>
          <Icon style = {styles.icon} name = "arrow-forward-outline"></Icon>
        </View>
      </Pressable>
      
     
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"center",
    marginTop:30 ,
  },
  itemButtons:{
    width: Dimensions.get("window").width - 100,
    height:"50%",
    marginVertical: 30,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f5f5f5",
    elevation:10,
    shadowOffset:{width:2, height:10},
    shadowColor:"purple",
    shadowOpacity:0.3,
    shadowRadius:2,

  },
  title:{
    fontSize:35,
    fontWeight:"bold",
    textAlign:"center",
  },
  icon:{
    fontSize:35,
    paddingTop:20
  }
})