import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import AppText from "./ui/AppText";
import THEME from "../theme";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim().length) {
      Alert.alert("Error", "Your query is empty");
    } else {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <View style={styles.wrap}>
      <TextInput
        placeholder="Query"
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <TouchableOpacity onPress={submit} style={styles.button}>
        <AppText style={styles.buttonText}>Go</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 85,
    paddingHorizontal: 6,
  },
  input: {
    flex: 1,
    marginRight: 5,
    maxWidth: 600,
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    fontSize: 20,
  },
  button: {
    backgroundColor: THEME.MAIN_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    justifyContent: "center",
    alignContent: "center",

    shadowRadius: 5,
    shadowOpacity: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: THEME.MAIN_COLOR,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Form;
