import React from 'react'

/*export default function AleatorioInt(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}

    console.log('o numero é ' + AleatorioInt(2,9));*/

export default props => {
    /*const min = props.min
    const max = props.max
    */

    const { min, max } = props;

    const Aleatrorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Número Aletotios</h2>
            <p> <strong>Valor Mínimo: </strong>{min} </p>
            <p> <strong>Valor Máximo: </strong>{max} </p>
            <p> <strong>Valor Escolhido: </strong>{Aleatrorio} </p>
        </div>
    )


}