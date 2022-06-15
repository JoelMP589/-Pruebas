import { getGifs } from "../components/helpers/getGifs";

describe('pruebas con el helper getGifs', () => {
    const category = 'One punch';
    test('debe de traer 10 elemtos ', async () => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBe(10);
    })
    test('que pasa cuando no hay categoria ', async () => {
        const gifs = await getGifs();
        expect(gifs.length).toBe(10);
    })
})