import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ children, style, ellipsizeMode, numberOfLines }) => {
  return (
    <Text
      style={{ ...styles.default, ...style }}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "mont-regular",
  },
});

export default AppText;
