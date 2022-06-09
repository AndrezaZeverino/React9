import { Component } from "react";

class Cadastro extends Component {
    constructor (props) {
        super (props);
        let id = props.match.params.id??0;
        this.state = {
            nome: '',
            idade: 0,
            id:id
        }
        if (id !== 0){
            this.loadperson()
        }
    }  
    loadperson = async () =>{
        let person = await fetch(`/pessoa/${this.state.id}`).then(resp => resp.json());
        this.setState({
            ['nome']:person.nome,
            ['idade']:person.idade
        })
    }
    render(){
// 1º passo 
        const handleInputChanged = (e) => {
// handleInputChanged - altera os valores
            const {name, value} = e.target;
            this.setState({[name]:value})
        }
// 2º passo 
    const savePerson = () => {
        if (this.state.id !== 0){
            updatePerson();
        }else{
        let pessoa = {
            nome:this.state.nome,
            idade:parseInt(this.state.idade)
        }
// fetch: comunicação com API. /pessoa rota do node 
// 3º passo 
        fetch('/pessoa', {
            method: 'POST',
            body:JSON.stringify(pessoa),
// (pessoa) é a let ali de cima
            headers:{'Content-Type':'application/json'}
        })
// 4º passo
        .then(() => {
            this.setState({
                            ['nome']: '',
                            ['idade']:0
                        })
        })
    }
    }
        const updatePerson = () => {
            let person = {
                nome: this.setState.nome,
                idade: this.setState.idade
            }
            fetch(`/pessoa${this.state.id}`, {
                method: 'PUT',
                body: JSON.stringify(person),
                headers: {'Content-type': 'application/json'}
            }).then(() => {
                window.location = '/consulta'
            })
        }
    return (
        <div className='col-md-6'>
            <label>Nome</label>
            <input name='nome' className='form-control' value={this.state.nome} onChange={handleInputChanged}/>
            <label>Idade</label>
            <input name='idade' type='number' className='form-control' value={this.state.idade} onChange={handleInputChanged}/>
            <button onClick={() => savePerson()} className='btn btn-success btn-sm mt-5' onClick={() => savePerson()}>Salvar</button>
        </div>
    )
}
                    }
    export default  Cadastro;