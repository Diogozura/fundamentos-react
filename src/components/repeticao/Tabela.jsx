import '../repeticao/Produtos.css'
import React from 'react'
import produtos from '../../data/produto'


export default props => {
    {/*const prod = Produto.map(produtos => {
        return <tr key={produtos.id}>{produtos.produto} - {produtos.preço}</tr>
    })*/}

    function getLinhas() {
        return  produtos.map((produto, i) => {
            return (
                <tr key={produto.id}className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R${produto.preço}</td>
                </tr>)
        })
            
    }

    return (
        <div className="Produtos">
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>)
}