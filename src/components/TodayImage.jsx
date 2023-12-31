import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const TodayImage = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/transition.mp3")
    );
    await sound.playAsync();
  }

  const handleViewPress = () => {
    playSound();
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default TodayImage;
