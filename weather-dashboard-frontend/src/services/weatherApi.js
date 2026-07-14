import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
});

export async function getWeather(city) {
    const response = await API.get(`/api/weather?city=${city}`);
    return response.data;
}

export async function getForecast(city) {
    const response = await API.get(`/api/forecast?city=${city}`);
    return response.data;
}