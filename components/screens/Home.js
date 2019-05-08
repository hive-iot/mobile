import React from "react";
import { View, Text, YellowBox } from "react-native";

// Components
import Hr from "../shared/Hr";
import Feed from "../shared/Feed";
import Alert from "../shared/Alert";
import Header from "../shared/Header";
import Stream from "../shared/Stream";
import Footer from "../shared/Footer";
import FadeInView from "../shared/FadeInView";

// Styles
import styles from "../../styles";

// Socket IO
import openSocket from "socket.io-client";

// Config
import { config } from "../../services/config";

YellowBox.ignoreWarnings([
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
]);

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      insideTemp: 0,
      outsideTemp: 0,
      insideHumidity: 0,
      outsideHumidity: 0,
      repo: []
    };

    this.socket = openSocket(config.apiURL);

    this.socket.on("connected", () => console.log("SocketIO Connected"));
    this.socket.on("data", data => {
      console.log({ data });

      if (data.value) {
        const { type, value } = data;

        this.setState({ [`${type}`]: value });
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      alert,
      data,
      insideTemp,
      outsideTemp,
      insideHumidity,
      outsideHumidity
    } = this.state;

    return (
      <View style={styles.container}>
        {/* Alert */}
        {insideTemp < 60 && (
          <FadeInView key={3}>
            <Alert message="Check your hive!" />
          </FadeInView>
        )}

        {/* Header */}
        <Header logoSize={50} />

        <Hr />

        {/* Feed */}
        <FadeInView key={0}>
          <Feed
            navigate={navigate}
            insideTemp={insideTemp}
            outsideTemp={outsideTemp}
            insideHumidity={insideHumidity}
            outsideHumidity={outsideHumidity}
          />
        </FadeInView>

        <Hr />

        {/* Stream / Status */}

        <FadeInView key={1}>
          <Stream
            data={data}
            insideTemp={insideTemp}
            outsideTemp={outsideTemp}
            insideHumidity={insideHumidity}
            outsideHumidity={outsideHumidity}
          />
        </FadeInView>

        <Hr mv={5} />

        {/* Footer */}
        <Footer />
      </View>
    );
  }
}
