import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";
import AddNote from "./screens/AddNote";
import {ScreenType} from "./constants/constants"
import AllNotesScreen from './screens/AllNotesScreen';
import BackButton from './components/BackButton';
export default function App() {
  const [screen, setScreen] = useState(ScreenType.home)
  const [notes, setNotes] = useState([])
  let content;
  switch (screen) {
    case ScreenType.addNote:
      content = <AddNote onSave = {(data)=>{setNotes([...notes, {id: Date.now(), note:data}])}}/>
      break;
    case ScreenType.allNotes:
      content = <AllNotesScreen notes = {notes}/>
      break;
    case ScreenType.home:
      content = <HomeScreen onExit={(data)=>{setScreen(data)}}/>
      break;
    default:
      break;
  }
  return (
    <View style={styles.container}>
      <Header/>
      {/* <HomeScreen onExit={(data)=>{setScreen(data)}}/> */}
      <StatusBar style="auto" />
      {screen !== ScreenType.home && (<BackButton onButtonClick={(data) => setScreen(data)}/>)}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
