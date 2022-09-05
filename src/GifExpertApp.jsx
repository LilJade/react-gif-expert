import { useState } from "react";
import { AddCategory, AddTitle, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState( ['Full metal alchemist'] );

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        //console.log(newCategory);
        setcategories( [ newCategory, ...categories] );


        //console.log('One Piece');
        //setcategories(categories.push('One Piece'));
        //setcategories( cat => [ ...cat, 'Boku No Hero'] );
    }

    //Definimos un useState(Hook) para poder cambiar el titulo
    //mediante un input
    const [title, setTitle] = useState('Expert Gifs APP');

    //Esta funcion nos actualiza el titulo que recibimos
    //en nuestro componente
    const onChangeTitle = (newTitle) => {
        setTitle(newTitle);
    }

    return (
    <>
        {/* Aqui pasamos el valor del titulo, 
        ya sea el actual o el nuevo que recibamos */}
        <h1>{title}</h1>

        {/* Nuestro componente <AddTitle> rescibe el
        nuevo titulo ingresado por el usuario y 
        lo envia a nuestro useState(Hook) para cambiarlo*/}
        <AddTitle onNewTitle = { event => onChangeTitle(event) }/>

        <AddCategory 
            //setCategories= { setcategories }
            onNewCategory={ event => onAddCategory(event) }
        />
        
        { categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )
            )
        }
    </>
  )
}
