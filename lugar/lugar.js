const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ encodedUrl }.,+${ encodedUrl }?json=1`
            // headers: {'X-Custom-Header': 'foobar'}
    });

    const resp = await instance.get();

    // console.log(resp.data);
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const { data } = resp;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}