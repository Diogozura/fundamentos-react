import './App.css'
import React from 'react'

import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import Tabela from './components/repeticao/Tabela'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMenbro from './components/basicos/FamiliaMenbro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro.jsx'
import Segundo from './components/basicos/comParametro.jsx'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>

    <div className="App">
        <h1>Fundamentos React.js (Arrow) </h1>
        <div className="Cards">
        <Card titulo="#09 Comunicação Direta " color="#FA26D7">
                <DiretaPai/>
            </Card>
            <Card titulo="#08 Renderização Condicional " color="#6082B6">
                <ParOuImpar numero={12}></ParOuImpar>
                <UsuarioInfo usario={{}} />
                {/* <UsuarioInfo usario={{email:'di@go.com'}}/> */}
            </Card>
            <Card titulo="#07 Desafio Repetição " color="#FF7F50D">
                <Tabela />
            </Card>
            <Card titulo="#06 Repetição" color="#6495ED">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 Componentes com Filhos" color="#DE3163">
                <Familia sobrenome="Alves" />
                <FamiliaMenbro nome="Diogo" />
                <FamiliaMenbro nome="Danilo" />
                <FamiliaMenbro nome="Daniel" />
                <FamiliaMenbro nome="Anderson" />

            </Card>
            <Card titulo="#04 Desafio Aleatorio" color="#6495ED">
                <Aleatorio min={1} max={100} />
            </Card>
            <Card titulo="#03 Fragmento" color="#CCCCFF">
                <Fragmento />
            </Card>
            <Card titulo="#02 Com parâmetro" color="#DFFF00">
                <Segundo
                    Título="Situação do Aluno"
                    Aluno="Pedro" nota={9.5} />
                <Segundo
                    Título="Situação do Aluno"
                    Aluno="Odair" nota={5.1} />
            </Card>
            <Card titulo="#01 Primeiro Componente" color="#FF7F50">
                <Primeiro></Primeiro>
            </Card>
        </div>



    </div>

