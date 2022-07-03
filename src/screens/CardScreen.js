import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

import AppText from "../components/ui/AppText";
import AppTextBold from "../components/ui/AppTextBold";

const CardScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={styles.wrap}>
        <View style={styles.header}>
          <View style={styles.avaWrap}>
            <Image
              style={styles.ava}
              source={{ uri: item.user.profile_image.large }}
            />
          </View>
          <View style={styles.names}>
            <AppTextBold style={styles.name}>{item.user.name}</AppTextBold>
            <AppText style={styles.username}>{item.user.username}</AppText>
          </View>
        </View>

        <View
          style={{ ...styles.imgWrap, aspectRatio: item.width / item.height }}
        >
          <Image style={styles.img} source={{ uri: item.urls.regular }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
  },

  names: {
    marginLeft: 15,
  },
  name: {
    fontSize: 22,
  },
  username: {
    fontSize: 18,
  },

  avaWrap: {
    borderRadius: "50%",
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  ava: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  imgWrap: {
    width: "100%",
    marginTop: 15,
    borderRadius: 5,
    overflow: "hidden",
    aspectRatio: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default CardScreen;
