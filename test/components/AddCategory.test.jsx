import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('pruebas en AddCategory.jsx', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} }></AddCategory>); // adentro una funcion de flecha
        // screen.debug(); //mostrar la caja de texto

        const input = screen.getByRole('textbox'); // es decir que busque el input

        fireEvent.input( input, { target: { value: 'goku' } } ); // disparar el evento

        expect( input.value ).toBe( 'goku' ); // asersion de lo que se espera recibir desde el render dujeto de pruebas

        screen.debug();

        // https://www.udemy.com/course/react-cero-experto/learn/lecture/19784994#questions
    });

    test('debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'lufy';
        const onNewCategory = jest.fn(); // simula ser una funcion, pero es ficticia

        // render( <AddCategory onNewCategory={ () => {} }></AddCategory>);
        render( <AddCategory onNewCategory={ onNewCategory }></AddCategory>); // jest.fn() simula ser una funcion

        const input = screen.getByRole('textbox'); // encuentra el input
        const form = screen.getByRole('form'); // lo identifica gracias al aria-label en AddCategory.jsx

        fireEvent.input( input, { target: { value: inputValue } } ); //simula el input
        fireEvent.submit( form ); // simula el enter en el form
        screen.debug();

        expect( input.value ).toBe(''); // se espera que la caja de exto haya sido limpiada con setinputValue('');
        // https://www.udemy.com/course/react-cero-experto/learn/lecture/19786602#questions

        expect( onNewCategory ).toHaveBeenCalled(); // se asegura que la funcion ficticia haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // se asegura que la funcion ficticia haya sido llamada una vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // se asegura que la funcion haya sido llamada con el inputValue de lufy

    });

    test('no debe llamar el onNewCategory si el input esta vacio', () => {

        const inputValue = '';
        const onNewCategory = jest.fn(); // simula ser una funcion, pero es ficticia

        // render( <AddCategory onNewCategory={ () => {} }></AddCategory>);
        render( <AddCategory onNewCategory={ onNewCategory }></AddCategory>); // jest.fn() simula ser una funcion

        const input = screen.getByRole('textbox'); // encuentra el input
        const form = screen.getByRole('form'); // lo identifica gracias al aria-label en AddCategory.jsx

        fireEvent.input( input, { target: { value: inputValue } } ); //simula el input
        fireEvent.submit( form ); // simula el enter en el form
        screen.debug();

        expect( onNewCategory ).toHaveBeenCalledTimes(0); // se asegura que la funcion ficticia no sea llamada
        expect( onNewCategory ).not.toHaveBeenCalled(); // se asegura que la funcion ficticia no sea llamada, esta vez con la negacion .not

        // https://www.udemy.com/course/react-cero-experto/learn/lecture/19786620#questions

    });
});

