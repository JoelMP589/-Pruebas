import axios from "axios";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=wEWBsdGtTuEQOwuaa6rU1C7NpdVBmHjq`;
    return await axios.get(url).then(({ data: { data } }) => {
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gifs;
    }).catch(error => {
        console.log(error);
        return 'error';
    });
}