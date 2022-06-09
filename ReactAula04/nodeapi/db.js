const Sequelize = require ('sequelize');
// abaixo estou configurando o banco de dados
const conexao = new Sequelize('crud', 'root', 'root', {
// crud é a pasta dentro do banco de dados, se ela não existisse eu criaria (pode ser com outro nome)
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = {
    Sequelize: Sequelize,
    conexao: conexao
}
