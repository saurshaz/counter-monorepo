import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <>
      <View style={{...styles.home, paddingTop: '3%'}}>
        <Counter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
