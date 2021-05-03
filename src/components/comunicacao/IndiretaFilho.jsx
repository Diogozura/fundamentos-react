import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const GerarIdade = () => parseInt(Math.random() * (max-min)) + min
    const GerarNerd = () => Math.random() > 0.5  
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('joão', GerarIdade(), GerarNerd)
                }>
                Fornecer Informações
                </button>
        </div>
    )
}