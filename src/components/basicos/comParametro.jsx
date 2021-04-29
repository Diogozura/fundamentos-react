import React from 'react'

export default function comParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (<div>
        <h2>{props.Título}</h2>
        <p>
            <strong>{props.Aluno} </strong>
                tem nota
               <strong> {notaInt} </strong>
               e foi
               <strong> {status}</strong> !
            </p>
    </div>
    )
}