import React from "react";
import { Font } from "expo";
import { View, Text } from "react-native";

// Styles
import styles from "../../styles";

export default class Stream extends React.Component {
  state = { fontLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      "pacifico-regular": require("../../assets/fonts/Pacifico-Regular.ttf")
    });

    await Font.loadAsync({
      "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf")
    });

    await Font.loadAsync({
      "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    const data = this.props;

    // Temp
    const insideTemp = "";
    const outsideTemp = "";

    // Humidity
    const insideHumidity = "";
    const outsideHumidity = "";

    const containerDataFontSize = 45;
    const containerHeaderFontSize = 20;
    const containerMarginBottom = 10;

    return (
      <View style={styles.stream}>
        {fontLoaded && (
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "pacifico-regular",
              marginBottom: 10
            }}
          >
            Current Status
          </Text>
        )}

        {fontLoaded && (
          <View style={styles.streamContainer}>
            {/* 1 */}
            <View style={{ width: 150, marginBottom: containerMarginBottom }}>
              <Text
                style={{
                  fontFamily: "poppins-regular",
                  fontSize: containerHeaderFontSize
                }}
              >
                Inside Temp
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: containerDataFontSize,
                  fontFamily: "poppins-bold"
                }}
              >
                {parseInt(data.insideTemp)}&deg;
              </Text>
            </View>

            {/* 2 */}
            <View style={{ width: 150, marginBottom: containerMarginBottom }}>
              <Text
                style={{
                  fontFamily: "poppins-regular",
                  fontSize: containerHeaderFontSize
                }}
              >
                Outside Temp
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: containerDataFontSize,
                  fontFamily: "poppins-bold"
                }}
              >
                {parseInt(data.outsideTemp)}&deg;
              </Text>
            </View>

            {/* 3 */}
            <View style={{ width: 150, marginBottom: containerMarginBottom }}>
              <Text
                style={{
                  fontFamily: "poppins-regular",
                  fontSize: containerHeaderFontSize
                }}
              >
                Inside Humidity
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: containerDataFontSize,
                  fontFamily: "poppins-bold"
                }}
              >
                {parseInt(data.insideHumidity)}%
              </Text>
            </View>

            {/* 4 */}
            <View style={{ width: 150, marginBottom: containerMarginBottom }}>
              <Text
                style={{
                  fontFamily: "poppins-regular",
                  fontSize: containerHeaderFontSize
                }}
              >
                Outside Humidity
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: containerDataFontSize,
                  fontFamily: "poppins-bold"
                }}
              >
                {parseInt(data.outsideHumidity)}%
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
