import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components";

const Detail = () => {
  const {
    params: { title, image, url, date, explanation },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: url }} style={styles.image} />
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "rgba(18,39,113,255)",
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 280,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: 30,
    marginBottom: 20,
  },
  dateContainer: {
    alignItems: "flex-end",
  },
  date: {
    marginVertical: 5,
    color: "#FFF",
    marginBottom: 15,
  },
  explanationContainer: {
    flex: 1,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
  },
  explanation: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Detail;
