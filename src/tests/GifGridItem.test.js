import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe('pruebas en <GifGridItem/>', () => {
    const title = 'Titulo del GIF';
    const url = 'https://media1.giphy.com/media/3o7btLwJWX9hjOZx6w/200w.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de  tener un parrafo con el titulo del gif ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('debe de tener una imagen con el url del gif y un alt con el title', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('debe de tener una clase "card"', () => {
        expect(wrapper.find('div').hasClass('card')).toBe(true);
    })
})