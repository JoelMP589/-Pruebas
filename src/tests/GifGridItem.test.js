import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe('pruebas en <GifGridItem/>', () => {

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });
})