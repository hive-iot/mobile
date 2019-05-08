import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFAE5",
    paddingTop: 10,
    flex: 1,
    height,
    width,
    paddingHorizontal: 15
  },

  header: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  // Feed
  feed: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },
  feedHeader: {
    fontSize: 18,
    marginBottom: 10
  },

  // Alert
  alert: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4949",
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 10
  },
  alertImage: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  alertText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },

  // Stream
  stream: {
    marginVertical: 10
  },
  streamContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  streamContainerData: { fontWeight: "bold", fontSize: 40 },
  offlineStream: { fontSize: 20, marginVertical: 20, color: "#696969" },

  // Hive
  hiveHeaderContainer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "center"
    // flex: 1
  },
  hiveHeaderContainerImage: {
    height: 30,
    width: 30
  },

  // Audio
  playContainer: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  // playImage: {
  //   height: 80
  // },

  // Footer
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
