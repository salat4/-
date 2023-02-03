 import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
 import React, { useState } from 'react'
 
 const AddNote = ({onSave}) => {
  const [text, setText] = useState("")
  const handleText = (e) =>{
    setText(e)
  }
  const handleClick = (e) =>{
    if(text.trim().length > 0 ){
      onSave(text)
    }
  }
   return (
     <View style = {styles.container}>
      <View style = {styles.formContainer}>
        <Text style = {styles.title}>Add note </Text>
        <View>
          <TextInput onChangeText={handleText} style={styles.input}/>
        </View>
        <Button onPress = {handleClick} title = "Add"/>
      </View>
     </View>
   )
 }
 
 export default AddNote
 
 const styles = StyleSheet.create({

    container:{flex:1},
    formContainer:{
      backgroundColor:"#f5f5f5",
      padding:10,
      margin:10,
    },
    title:{
      fontSize:20,
      fontWeight:"bold",
    },
    input:{
      marginVertical:20,
      width:"100%",
      borderBottomWidth:2,
      fontSize:16,
      padding:10,
    }
 })