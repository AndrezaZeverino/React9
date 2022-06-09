// estudar sobre hook
import { Component } from "react";

class Exemplo extends Component{
    constructor(props){
        super(props)
        this.state = {
// essa parte acima é padrão, só consigo usar o state se tiver o Component acima 
            numeroClicks:0
        }
    }
        render(){
            const incrementValueClick = () => {
                let numberClick = this.state.numeroClicks;
                numberClick++;
                this.setState({['numeroClicks']:numberClick});
            }
            // Para resetar quando chegar em cinco 
            const resetClickValue = () => {
                this.setState({['numeroClicks']:0})
            }
            return(
                <div>
                    <h1>{this.state.numeroClicks}</h1>
                    <button onClick={() => incrementValueClick()}>Increment</button>
            {
                (() => {
                    if(this.state.numeroClicks >= 5)
                        return resetClickValue();
                    else 
                        return <h1>Valor atingido</h1>
                }) ()
            }
                </div>
            )
    }
}
export default Exemplo; 