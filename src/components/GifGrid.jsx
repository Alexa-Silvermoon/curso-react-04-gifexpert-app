// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ( { category } ) => {
  
  // getGifs(category);

  const { images, isLoading } = useFetchGifs( category ); //custom hook

  // console.log( { images, isLoading } );

  // el siguiente bloque de codigo lo he metido en: useFetchGifs
  /* const [images, setImages] = useState( [] );

  const getImages = async() => {

    const newImages = await getGifs( category );
    setImages( newImages );

  }

  useEffect(() => { // useEffect no se puede usar con async y await, por esa razon se creo la funciones getImages aparte

    getImages();
    
  }, []) */
  
  return (

    <>
        <h3> {category} </h3>
        {
          /* isLoading? // forma 1
          ( <h2>Cargando...</h2> )
          : null // el null no se renderiza en react */

          isLoading && ( <h2>Cargando...</h2> ) // forma 2
        }

            <div className="card-grid">
              {
    
                /* images.map( ( { id, title} ) => ( //opcion 3
    
                  <GifItem key={ id }></GifItem>
    
                )) */

                /* images.map( ( image  ) => ( //opcion 4
    
                  <GifItem 
                          key={ image.id }
                          image={ image.title }
                          url={ image.url }></GifItem>
    
                )) */

                images.map( ( image  ) => ( //opcion 5 con el spread ... hago exparsir la image, es decir sus propiedades
    
                  <GifItem 
                          key={ image.id }
                          { ...image }></GifItem>
    
                ))
    
              }
    
            </div>

        {/* <ol> */}

          {

            /* images.map( ( img ) => ( //opcion 1

              <li key={ img.id } > { img.title } </li>

            )) */

            /* images.map( ( { id, title} ) => ( //opcion 2

              <li key={ id } > { title } </li>

            )) */

          }

        {/* </ol> */}

    
    </>
  )
}
