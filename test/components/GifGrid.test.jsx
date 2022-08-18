import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); // con esto  useFetchGifs es mi mock (imitacion de lo que hay en ese path)

describe('pruebas en GifGrid.jsx', () => {

    const category = 'one punch';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({

            images: [],
            isLoading: true

        });

        render( <GifGrid category={category}></GifGrid>)

        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

        // https://www.udemy.com/course/react-cero-experto/learn/lecture/19799870#questions

    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [

            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://ejemplo.com/saitama.jpg'
            },
            {
                id: 'XYZ',
                title: 'Goku',
                url: 'https://ejemplo.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({

            images: gifs,
            isLoading: false
            
        });

        render( <GifGrid category={category}></GifGrid>);
        screen.debug();

        expect( screen.getAllByRole('img').length).toBe(2); //2 ya que solo tengo dos onjetos en el array mockeado de gifs // Saitama Goku

        // https://www.udemy.com/course/react-cero-experto/learn/lecture/19800988#questions

    });
})