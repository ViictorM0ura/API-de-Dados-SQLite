const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());


const db = new sqlite3.Database('./banco.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});


app.get('/dados/2000', (req, res) => {
    db.all('SELECT * FROM `2000`', [], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar dados da tabela 2000.' });
        }
        res.json(results);
    });
});


app.get('/dados/2010', (req, res) => {
    db.all('SELECT * FROM `2010`', [], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar dados da tabela 2010.' });
        }
        res.json(results);
    });
});


app.get('/dados/2022', (req, res) => {
    db.all('SELECT * FROM `2022`', [], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar dados da tabela 2022.' });
        }
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
