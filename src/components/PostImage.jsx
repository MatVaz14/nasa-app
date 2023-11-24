import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const PostImage = ({ title, date, url, explanation }) => {
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
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default PostImage;
