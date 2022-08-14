import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState( [] );
    const [isLoading, SetIsLoading] = useState( true );

    const getImages = async() => {

    const newImages = await getGifs( category );
    setImages( newImages );
    SetIsLoading( false ); //cuando la imagen se trae, se pone en false el set iniciando que ya termino de traer,
    // eso se vera reflejando en isLoading && ( <h2>Cargando...</h2> ) // forma 2

  }

    useEffect(() => { // useEffect no se puede usar con async y await, por esa razon se creo la funciones getImages aparte

        getImages();
    
    }, [])

  return{

    images,
    isLoading

  }
}

// custom hooks:
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19759978#questions