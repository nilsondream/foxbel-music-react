const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com/';

export const getSongs = async ({ artist = '22gz' } = {}) => {
    return fetch(`${API_URL}/search?q=${artist}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba2b2adeemsh2f35da23c7dcb1dp14beddjsnea50f708d263',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
        .then((response) => response.json())
        .then(({ data }) => {
            return data;
        })
        .catch((error) => console.error(error));
}

export const getTracks = async ({ id = '1656946772' } = {}) => {
    return fetch(`${API_URL}/track/${id}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba2b2adeemsh2f35da23c7dcb1dp14beddjsnea50f708d263',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => console.warn(error));
}