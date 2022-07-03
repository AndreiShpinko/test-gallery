import React from "react";
import { Text, StyleSheet } from "react-native";

const AppTextBold = ({ children, style }) => {
  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "mont-bold",
  },
});

export default AppTextBold;
