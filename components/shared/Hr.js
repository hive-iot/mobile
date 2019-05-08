import React from "react";
import { View } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default function(props) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          height: 1,
          borderBottomColor: "#999794",
          borderBottomWidth: 1,
          width: width / 1.1,
          marginVertical: props.mv || 10
        }}
      />
    </View>
  );
}
