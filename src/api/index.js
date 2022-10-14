import axios from "axios";

const instant = axios.create({
    baseURL : 'https://stg-backend.catersmart.in/api/'
})

export default instant;