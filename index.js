const express = require('express');
require("dotenv").config();
const { sequelize } = require('./db/models/modelSequelize');
const app = express();
const port = process.env.server_port;

app.use(express.json());

// Routes
const petRouter = require("./router/petRoutes")
app.use('/pet', petRouter)


// Sincronizar os modelos com o banco de dados
sequelize.sync({ force: false })
    .then(() => {
        console.log('As tabelas foram criadas com sucesso.');
    })
    .catch((erro) => {
        console.log("Falha ao conectar no banco de dados: " + erro);
    });

    app.listen(port, async () => {
    console.log(`Server running`);
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados!');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
});