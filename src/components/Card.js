import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import AppText from "./ui/AppText";

const Card = ({ item, toCard }) => {
  const imgUri = item.urls.regular;
  const avaUri = item.user.profile_image.medium;
  const username = item.user.username;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...styles.card, borderColor: item.color }}
      onPress={() => toCard(item)}
    >
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{
            uri: imgUri,
          }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.textWrap}>
          <AppText style={styles.text} ellipsizeMode={"tail"} numberOfLines={1}>
            {username}
          </AppText>
        </View>
        <View style={styles.avaWrap}>
          <Image
            source={{
              uri: avaUri,
            }}
            style={styles.ava}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const itemWidth = (Dimensions.get("window").width - 10 - 2 * 4) / 2;

const styles = StyleSheet.create({
  card: {
    width: itemWidth,
    margin: 2,
    borderRadius: 5,
    backgroundColor: "#eee",
    borderBottomWidth: 2,
  },
  imageWrap: {
    width: "100%",
    aspectRatio: 0.8,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },

  textWrap: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },

  avaWrap: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    overflow: "hidden",
  },
  ava: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Card;
