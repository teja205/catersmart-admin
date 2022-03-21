import axios from 'axios';

export default axios.create({
    baseURL: 'https://stg-backend.catersmart.in/api'
});