import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('one punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0); // se espera 0 ya que es el estado inicial
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes e isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('one punch') );

        await waitFor(

            () => expect( result.current.images.length ).toBeGreaterThan(0)
            // si es mayor que 0 significa que el estado del hook en result ha cambiado, es decir que ahora tiene al menos 1 valor,
            // por ende el await waitfor devolverra true y el isLoading recibira false, dando a entender que ya images recibio algo,
            // y por eso el isLoading se pondra en false

        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0); // se espera 0 ya que es el estado inicial
        expect( isLoading ).toBeFalsy();

    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19801490#questions