// Crie uma nova rota com o nome exercicio que chama a página exercício.
// No exercício crie um evento click de um botão que incremente uma varíavel state a cada click, deve ser adicionado mais 1 a variável
// Quando o valor for menor que 5 deve ser exibido a mensagem "valor menor que 5", caso for maior que 5 exibir a mensagem "valor maior que cinco"import { Component } from "react";
import {Component} from 'react'

class Exercicio extends Component {
    constructor(props){
        super (props)
        this.state = {
            numeroClicks:0
        }
    } 
    render(){
        const incrementValueClick = () => {
            let numberClick = this.state.numeroClicks;
            numberClick++;
            this.setState({['numeroClicks']:numberClick});
        }
        // Para resetar os valores uso essa const abaixo e incluo o botão no html
        const resetValue= () => {
            this.setState({['numberClick']:0});
        }
        return(
            <div className='col-md-6'>
                <h1>{this.state.numeroClicks}</h1>
                <button className='btn btn-success btn-sm'onClick={() => incrementValueClick()}>Incremente</button>
                <button className='btn btn-danger btn-sm'onClick={() => resetValue()}>Reset</button>
                {
                        (() => {
                            if(this.state.numeroClicks > 5)
                                return <h1>Valor maior que cinco</h1>
                            else 
                            return <h1>Valor menor que cinco</h1>
                        }) ()
                    }
            </div>
        )
    }
}
export default Exercicio;