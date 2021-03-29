import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // //AGREGAR ELEMENTO AL ARREGLO AL DAR CLICK
    // const handleAdd = () =>{
    //     const nuevoValor = "Naruto";
    //     //OPCION 1. Agregamos al final
    //     //setCategories( [...categories, nuevoValor]);

    //     //OPCION 2. Agregamos al inicio
    //     //setCategories( [nuevoValor, ...categories]);

    //     //OPCION 3.
    //     setCategories( categories => [... categories, nuevoValor]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    ))
                }
            </ol>







        </>
    )

}

export default GifExpertApp;