import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.counter}>
      <View style={styles.counterRow}>
        <Button
          title="Decrement"
          onPress={() => dispatch({ type: "DEC_COUNTER" })}
        />
        <Text style={styles.count}>{count}</Text>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: "INC_COUNTER" })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counterRow: {
    // flex: 1,
    flexDirection: "row",
  },
  count: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: 50,
    textAlign: "center",
    marginTop: 4,
  },
});
