import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){

            setCategories(categories => [ inputValue, ...categories ]);
            setInputValue('');
        }


    }

    //LOS COMPONENTES DE REACT SOLO DEBEN REGRESAR 1 ELEMENTO. PERO ESE ELEMENTO PUEDE TRAER LOS ELEMENTOS
    //QUE REQUIERA. POR EJEMPLO SI REGRESO UN FORMULARIO, EL FORMULARIO ES 1 ELEMENTO Y DENTRO TIENE MUCHOS
    //ELEMENTOS MAS, ESO ES VALIDO.
    return (
        <form onSubmit= { handleSubmit }>
            <input
                type="text"
                value= { inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
