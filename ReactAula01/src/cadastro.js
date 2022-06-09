import {Component} from "react"

class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            idade:0,
            listaPessoas:[]
        }
    }
    render(){
    // handle - já vai salvando os dados digitados 
        const handleInputChange = (e) => {
            const {name,value} = e.target;
            this.setState({[name]:value})
        }
        const save= () => {
            let pessoa = {
                nome:this.state.nome,
                idade:this.state.idade
            }
            // fiz a let lista pra ir salvando todos os valores no Back
            let lista = this.state.listaPessoas;
            lista.push(pessoa);
            this.setState({['nome']:'',
                        ['idade']:0,
                        ['listaPessoas']:lista
                    })
        }
        const removePerson = (nome,idade) => {
            let lista = this.state.listaPessoas;
            lista = lista.filter(x => x.nome !== nome && x.idade !== idade)
            this.setState({['listaPessoas']:lista})
        }
        return (
            <div className='col-md-5'>
                <label>Nome</label>
                <input name='nome' className='form-control' value={this.state.nome} onChange={handleInputChange}/>
                <label>Idade</label>
                <input name='idade' className='form-control' type='number' onChange={handleInputChange} value={this.state.idade}/>
                <button className='btn btn-success btn-sm mt-4' onClick={() => save()}>Salvar</button>
                <table className='table table-striped'>
                    <thead>
                        <th>Nome</th>
                        <th>Idade</th>
                    </thead>
                    <tbody>
                     {this.state.listaPessoas.map(x => 
                        <tr>
                            <td>{x.nome}</td>
                            <td>{x.idade}</td>
                            <td><button className='btn btn-danger btn-sm' onClick={() => removePerson(x.nome,x.idade)}>Remover</button></td>
                        </tr> 
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cadastro;