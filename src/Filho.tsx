import * as React from 'react';
import Neto from './Neto';

interface Props { 
    empresaNome: string;
    onNomeMudou: (nome: string) => void;
}


function Filho(props: Props){

    return (
        <Neto onNomeMudou={props.onNomeMudou} empresaNome={props.empresaNome} />
    )


}


export default Filho;