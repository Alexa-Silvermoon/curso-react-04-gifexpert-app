import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

// TODO: Terminar pruebas en GifExpertApp.jsx

describe('pruebas en GifExpertApp.jsx', () => {

    test('debe agregar una nueva categoria y hacer snapshoot', () => {

        const inputValue = 'chavo';

        const { container } = render( <GifExpertApp></GifExpertApp>);

        expect( container ).toMatchSnapshot();

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } ); // chavo
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue + '2' } } ); // chavo
        fireEvent.submit( form );

        screen.debug();

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3); // heading es etiquetas H
        // NOTA: toBe(3) ya que esta contando PC en const [categories, setCategories] = useState(['pc']);

    });

    test('NO debe agregar una categoria repetida', () => {

        const inputValue2 = 'ramon';

        const { container } = render( <GifExpertApp></GifExpertApp>);

        expect( container ).toMatchSnapshot();

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue2 } } ); // ramon
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue2 } } ); // ramon
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2); // heading es etiquetas H
        // NOTA: toBe(2) ya que esta contando PC en const [categories, setCategories] = useState(['pc']);

    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/32021650#questions