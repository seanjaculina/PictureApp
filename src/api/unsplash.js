import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0kdfHjD7TgJTORIdgtyVP_80ToBPI7VaGwP-WAgdqGY'
    }
});