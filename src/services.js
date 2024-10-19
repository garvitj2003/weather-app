import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const apiCall = async (cityName) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric
`;
  try {
    const response = await axios.get(api);
    return response;
  } catch (err) {
    if (err) {
      alert("city name incorrect");
      console.error(err);
    }
  }
};
