import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Routes from "./src/routes/Routes.jsx";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "rgba(7,36,93,155)",
  },
});
