const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=67b4ae1f7f8ea7ea00f8cf63255e3993&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}