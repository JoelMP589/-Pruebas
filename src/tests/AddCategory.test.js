import { shallow } from "enzyme/build";
import AddCategory from "../components/AddCategory";

describe('pruebas en componente <AddCategory/>', () => {
    const setCategorias = jest.fn();
    const wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('input').prop('value')).toBe(value);
    })
    test('no debe de agregar la categoria si el input esta vacio', () => {
        const input = wrapper.find('input');
        const value = '';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategorias).not.toHaveBeenCalled();
    })
    test('debe de llamar el setCategorias y limpiar la caja de texto', () => {
        //hay que simular el evento onchange del input
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        //haqye simular el evento onsubmit del form
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //hay que esperar a que el setCategorias se ejecute
        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
        expect(setCategorias).toHaveBeenCalledTimes(1);
        //verificvar que la caja de texto este vacia
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})