const Sequelize = require('sequelize')

//Conexao com banco de dados
const sequelize = new Sequelize('words', 'root', '486455', {
    host: 'localhost',
    dialect : 'mysql'
})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}