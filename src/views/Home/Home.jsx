import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { format, sub } from "date-fns";
import { Header, TodayImage, LastFiveDaysImages } from "../../components";

import fetchApi from "../../utils/fetch";

const Home = () => {
  const [todayImage, setTodayImage] = useState({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([]);
  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodayImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodayImage({});
      }
    };

    const loadLastFiveDaysImage = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodayImage().catch(null);
    loadLastFiveDaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      <LastFiveDaysImages lastFiveDaysImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default Home;
