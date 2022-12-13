import React from "react";
import { LogBox } from "react-native";
import AppLoading from 'expo-app-loading'

LogBox.ignoreAllLogs();

import Routes  from "./src/routes";
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded)
  return <AppLoading />

  return (
    <Routes />
  )
}

