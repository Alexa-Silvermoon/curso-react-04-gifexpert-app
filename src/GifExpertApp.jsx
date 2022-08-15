
import { useState } from 'react'
import { AddCategory, GifGrid } from './components/';

// rafc
export const GifExpertApp = () => {

    // arreglo de categorias:
    const [categories, setCategories] = useState(['pc']);
    // NOTA: los hooks no deben ir dentro de condicionales
    // console.log( categories );

    // TODO: boton debe agregar valorant al arreglo de categorias
    // pista: <button onClick={ ( event ) => handleAdd( event, 'hola chaval' ) }> +1 </button>
    const onAddCategory = ( onNewCategory) => {

        // console.log( onNewCategory );

        // si la categoria existe, no la vuelva a incluir en el arreglo
        if ( categories.includes( onNewCategory ) ) return;

        // setCategories( categories.concat('valorant') ); //funciona pero da problemas con lakey
        setCategories([  onNewCategory, ...categories ]); // funciona pero tambien da problemas con la key
        // setCategories( cat => [ ...cat,'valorant']); // funciona pero tambien da problemas con la key


    }

  return (

        <>
            {/* titulo */}
            <h1>GifExpertApp - By Alexander Martinez Millan</h1>

            {/* input */}
            {/* {<AddCategory setCategories={ setCategories }></AddCategory>} */}
            <AddCategory onNewCategory={ ( value ) => onAddCategory( value )} ></AddCategory>

            {/* listado de gif */}
            {/* <button onclick={ onAddCategory }>Agregar</button> */}

            {/* <ol> */}
                {/* { categories.map( category => {

                        return <li key={ category } > { category } </li>
                    })
                } */}

                { categories.map( ( category ) => (

                        /* {/* <div key={ category }>
                            <h3> { category }</h3>
                            <li> { category }</li>
                        </div> */

                        <GifGrid key={ category } category={ category }></GifGrid>
                    ))
                }

            {/* </ol> */}
                {/* gif item */}
    
        </>
    
    );
}

// api key giphy: 14OSyua313kBBUfJYUypqcp7V8PPwZ8x