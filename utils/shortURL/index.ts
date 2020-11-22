import axios from "axios";

//sends short id to server and recieves short Url
export const createShortURL = async (longURL) => {
  return new Promise(async (resolve, reject) => {
    try {
      const axiosResponse = await axios.post("/api/createShortUrl", {
        longURL,
      });
      const shortURL = axiosResponse.data;
      resolve(shortURL);
    } catch (err) {
      reject(err);
    }
  });
};
