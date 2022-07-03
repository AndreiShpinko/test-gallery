import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Form from "../components/Form";
import Service from "../Service";
import Card from "../components/Card";

import AppTextBold from "../components/ui/AppTextBold";

const MainScreen = ({ navigation }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    Service.getPhotos().then((res) => setGallery(res));
  }, []);

  const onSubmit = (value) => {
    setGallery([]);
    Service.getPhotosByQuery(value).then((res) => {
      if (res.results.length === 0) {
        setGallery(null);
      } else setGallery(res.results);
    });
  };

  const toCardScreen = (item) => {
    navigation.navigate("Card", { item });
  };

  let content;

  if (gallery === null)
    content = (
      <View style={styles.textWrap}>
        <AppTextBold style={styles.text}>No matches</AppTextBold>
      </View>
    );
  else if (gallery.length === 0)
    content = (
      <View style={styles.textWrap}>
        <ActivityIndicator color="#000" size="large" />
      </View>
    );
  else {
    content = gallery.map((item, i) => (
      <Card item={item} key={i} toCard={toCardScreen} />
    ));
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Form onSubmit={onSubmit} />
        <View style={styles.gallery}>{content}</View>
      </View>
    </ScrollView>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: "#fff",
    minHeight: windowHeight,
  },
  gallery: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  textWrap: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default MainScreen;
