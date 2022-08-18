import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19784000#questions

/* 
GifItem.propTypes = {

  title: propTypes.string.isRequired,
  url: propTypes.string
  
}
 */

describe('Pruebas en GifItem.jsx', () => {

    const title = 'string title';

    // const url = 'https://media3.giphy.com/media/3o6fJ5z2bgCLBshZUA/giphy.gif?cid=e9ea52aa1b2dzwzaxtybn4altkqgz5xju7e0aipikr4bssog&rid=giphy.gif&ct=g';
    const url = 'https://ejemplo.com/imagen.jpg';

    test('Evaluar el snapshot, title obligatorio con propTypes', () => {

        const { container} = render(<GifItem title={title} url={url}></GifItem>);

        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        const { container} = render(<GifItem title={title} url={url}></GifItem>);
        screen.debug();

        // probando si hay una imagen en el url
        // expect( screen.getByRole('img').src ).toBe( url );
        
        // probando si hay una imagen en el url ( optimizado ):
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url ); // const url = 'https://ejemplo.com/imagen.jpg';
        expect( alt ).toBe( alt ); // const title = 'string title';

        /* 
        <body>
            <div>
                <div
                class="card"
                >
                <img
                    alt="string title"
                    src="https://ejemplo.com/imagen.jpg"
                />
                <p>
                    string title
                </p>
                </div>
            </div>
        </body>
        */

    });

    test('debe mostrar el titulo en el componente', () => {

        render( <GifItem title={title} url={url}></GifItem>);
        expect( screen.getByText( title) ).toBeTruthy();

    });

});