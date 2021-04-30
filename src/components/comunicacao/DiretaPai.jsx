import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Cleiton" idade={30} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Carlos" idade={18} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Ana" idade={15} nerd={true}></DiretaFilho>
        </div>
    )
}