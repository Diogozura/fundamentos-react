import React from 'react'
import If, { Else } from './If'

export default props => {
    const usario = props.usario || {}
    return (
        <div>
            {/* <If test={usario && usario.nome}>
                Seja bem-vindo <strong>{usario.nome}</strong>
            </If>
            <If test={!usario || !usario.nome}>
                Seja bem-vindo <strong>Amigo</strong>
            </If> */}
            <If test={usario && usario.nome}>
                Seja bem-vindo <strong>{usario.nome}</strong>
                <Else>
                    Seja bem-vindo <strong>Amigão</strong>
                </Else>
            </If>

        </div>)
}