// @vendors
import axios from "axios";

export const getIP = async () => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  console.log("DATA FROM FETCH", res.data);

  return res.data.ip;
};
