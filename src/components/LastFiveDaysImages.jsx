import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import PostImage from "./PostImage.jsx";

const LastFiveDaysImages = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {props.lastFiveDaysImages?.map((postImage, index) => (
          <PostImage key={index} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;
