import axios from "react-native-axios";

import { config } from "./config";

const bi = axios.create({ baseURL: config.repoURL });

async function fetchRepo() {
  const { data } = await bi.get(`/api/sensor`);

  return data.data;
}

export { fetchRepo };
