import React from "react";
import { Image } from "react-native";

export default function Splash(props) {
  return (
    <Image source={require("../../assets/splash.png")} style={{ flex: 1 }} />
  );
}
