import axios from 'axios';


const API_KEY = 'e9ca276b9735579d11174ceeec3e7eec';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?` 

export const FETCH_WEATHER = 'FETCH_WEATHER'; 

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}&appid=${API_KEY}`;
    // const url = `http://api.openweathermap.org/data/2.5/forecast?&q=new%20york&appid=e9ca276b9735579d11174ceeec3e7eec`;
    const request = axios.get(url);
    console.log("Request : - " , request);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}