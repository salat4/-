 import { StyleSheet, Text, View ,FlatList } from 'react-native'
 import React from 'react'
 
 const AllNotesScreen = ({notes}) => {
   return (
     <View style={styles.container}>
       <FlatList
       data = {notes}
       renderItem={({item}) =><Text style={styles.listItem}>{item.note}</Text>}
       />
     </View>
   )
 }
 
 export default AllNotesScreen
 
 const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  },
  listItem:{
    textAlign:"center",
    borderWidth:4,
    padding:10,
    borderRadius:5,
    borderColor:"purple",
    backgroundColor:"yellow",
    marginTop: 10,
    fontSize:20,
    fontWeight:"400",
  },
 })