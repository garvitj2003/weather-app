import axios from "axios";
const apiKey = "13db6da473698e66b2cf0679f2283ceb";

export const apiCall = async (cityName) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric
`;
  try {
    const response = await axios.get(api);
    return response;
  } catch (err) {
    console.error(err);
  }
};
