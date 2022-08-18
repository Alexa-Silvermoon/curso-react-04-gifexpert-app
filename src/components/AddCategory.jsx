import { useState } from "react"
import  PropTypes  from 'prop-types';

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    // const onInputChange = (event) => {
    const onInputChange = ({ target }) => { //para que mi input sea dinamico

        // console.log( event.target.value );
        // console.log( target.value ); //muestra letra por letras a medida que voy escribiendo

        // setinputValue( event.target.value );
        setinputValue( target.value );
    }

    const onSubmit = ( event ) => { //para la tecla enter

        event.preventDefault(); // evita que el navegador se refresque

        if ( inputValue.trim().length <= 1 ) return; //debe haber mas de un caracter para realizar la busqueda

        // console.log( event ); // muestra: yntheticBaseEvent {_reactName: 'onSubmit', _targetInst: null, type: 'submit', nativeEvent: SubmitEvent, target: form, …}
        // console.log('enter: ',inputValue ); //este valor lo enviare para hacer busquedas despues
        
        // setCategories( ( categories ) => [ inputValue, ...categories ]);
        setinputValue(''); // limpia la caja de texto del input despues del enter
        onNewCategory( inputValue.trim() ); //trim() elimina espacios en blanco innecesarios en el input
    }

  return (

    // <form onSubmit={ ( event ) => onSubmit( event )}>
    // aria-label se usa para AddCategory.test.jsx
    <form onSubmit={ onSubmit } aria-label="form">

        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            // onChange={ (event) => onInputChange(event) }
            onChange={ onInputChange }
        ></input>

    </form>

  )
}

AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired //func de function
}