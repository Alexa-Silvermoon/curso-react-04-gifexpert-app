import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en getGifs.js', () => {

    test('debe retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('naruto'); // category a buscar
        // console.log( gifs ); //trae los 30 allary &limit=30`;

        // se evaluar que el arreglo contenga almenos 1 elemento
        expect( gifs.length ).toBeGreaterThan( 0 );

        // se espera que el contenido de gifs tenga la siguiente estructura y que sea en string:
        expect( gifs[0] ).toEqual({

            id: expect.any( String ), 
            title: expect.any( String ),
            url: expect.any( String ) 
            
        });
    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19784544#questions
