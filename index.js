const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 23213;

// Habilita CORS para permitir acessos externos
app.use(cors());

// Conecta ao banco de dados SQLite
const db = new sqlite3.Database('./banco.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Endpoint dinâmico para consulta de dados por ano
app.get('/dados/:year', (req, res) => {
    const year = req.params.year;

    // Validação do ano para evitar SQL Injection
    if (!/^\d{4}$/.test(year)) {
        return res.status(400).json({ error: 'Ano inválido. Certifique-se de fornecer um ano com 4 dígitos.' });
    }

    // Consulta a tabela correspondente ao ano
    db.all(`SELECT * FROM \`${year}\``, [], (error, results) => {
        if (error) {
            console.error(`Erro ao consultar a tabela ${year}:`, error.message);
            return res.status(500).json({ error: `Erro ao consultar a tabela ${year}.` });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: `Nenhum dado encontrado para o ano ${year}.` });
        }

        res.json(results);
    });
});

// Inicializa o servidor na porta configurada
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`A API pode ser acessada pelo proxy reverso em: https://api.serverbr.top`);
});
