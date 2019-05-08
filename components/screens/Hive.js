import React from "react";
import { Font } from "expo";
import { View, Text, Image, TouchableOpacity } from "react-native";

// Graph
import { LineChart, YAxis, Grid } from "react-native-svg-charts";
import { Line, Circle } from "react-native-svg";

// Components
import Header from "../shared/Header";

// Styles
import styles from "../../styles";

const sensorData = [
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }],
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }],
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }],
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }],
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }],
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }],
  [{ insideTemp: 1, outsideTemp: 2, insideHumidity: 3, outsideHumidity: 4 }]
];

export default class Hive extends React.Component {
  state = {
    fontLoaded: false,
    insideTemp: 0,
    outsideTemp: 0,
    insideHumidity: 0,
    outsideHumidity: 0
  };

  async componentDidMount() {
    await Font.loadAsync({
      "pacifico-regular": require("../../assets/fonts/Pacifico-Regular.ttf")
    });

    await Font.loadAsync({
      "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  displayData = index => {
    console.log(index);

    // const {
    //   insideTemp,
    //   outsideTemp,
    //   insideHumidity,
    //   outsideHumidity
    // } = sensorData[index];

    // this.setState({ insideTemp, outsideTemp, insideHumidity, outsideHumidity });
  };

  render() {
    const data = [60, 79, 98, 72, 65, 87, 82, 93, 76, 86];

    const contentInset = { top: 20, bottom: 20 };

    const { fontLoaded } = this.state;

    const containerDataFontSize = 45;
    const containerHeaderFontSize = 20;
    const containerMarginBottom = 10;

    const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => (
        <Circle
          key={index}
          onPress={() => console.log("Clicked")}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={"rgb(134, 65, 244)"}
          fill={"white"}
        />
      ));
    };

    const HorizontalLine = ({ y }) => (
      <Line
        key={"zero-axis"}
        x1={"0%"}
        x2={"100%"}
        y1={y(50)}
        y2={y(50)}
        stroke={"grey"}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    );

    const { navigation } = this.props;
    const insideTemp = navigation.getParam("insideTemp");
    const outsideTemp = navigation.getParam("outsideTemp");
    const outsideHumidity = navigation.getParam("insideHumidity");
    const insideHumidity = navigation.getParam("insideHumidity");

    return (
      <View style={styles.container}>
        <Header logoSize={50} />

        {fontLoaded && (
          <View style={styles.hiveHeaderContainer}>
            <Image
              source={require("../../assets/honeycomb_black.png")}
              style={styles.hiveHeaderContainerImage}
            />
            <Text style={{ fontFamily: "poppins-bold", fontSize: 30 }}>
              Hive Data
            </Text>
          </View>
        )}

        <View style={{ height: 200, flexDirection: "row" }}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
              fill: "grey",
              fontSize: 10
            }}
            numberOfTicks={10}
            formatLabel={value => `${value}`}
          />
          <LineChart
            style={{ flex: 1 }}
            data={data}
            svg={{ stroke: "rgb(134, 65, 244)", strokeWidth: 2 }}
            contentInset={contentInset}
          >
            <Grid />
            <HorizontalLine />
            <Decorator />
          </LineChart>
        </View>

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
                {parseInt(insideTemp)}&deg;
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
                {parseInt(outsideTemp)}&deg;
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
                {parseInt(insideHumidity)}%
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
                {parseInt(outsideHumidity)}%
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
