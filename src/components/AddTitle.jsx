import { useState } from "react";

export const AddTitle = ( { onNewTitle } ) => {

    //Definimos nuestro HOOK useState
    const [inputVal, setInputVal] = useState();

    // Funcion que ejecuta el <form> al presionar ENTER
    const onSubmit = (event) => {
        //Evitamos que se recargue la pagina
        event.preventDefault();

        //Si el <input> tiene menos de 2 letras 
        //no ejecutamos nada
        if(inputVal.trim().length <= 1) return;

        //Caso contrario enviamos a nuestra prop
        //'onNewTitle' el valor dentro del <input>
        onNewTitle(inputVal.trim());
        //Reseteamos el <input>
        setInputVal('');
    }

    //Con esta funcion observamos los cambios que
    //se hagan dentro del <input> para enviar el
    //'target' o el texto al presionar ENTER
    const onInputChange = ({ target }) => {

        //Enviamos al useState(HOOK) el texto escrito en el <input>
        setInputVal( target.value )
    }

  return (
    //El <form> enviará la info cuando se presione ENTER,
    //esto ya es una propiedad del <form>, mediante el onSubmit
    <form onSubmit={ onSubmit }>
        {/*Nuestro input */}
        <input 
            type="text"
            placeholder="Cambia el titulo..."
            //Almacenará el valor del input en su value
            value={ inputVal } //pero sirve para cuando queremos un valor inicial o reseteamos el input
            //Cuando cambia el texto en el input
            //ese cambio se va registrando con el onChange
            onChange={ onInputChange }
        />
    </form>
  )
}
