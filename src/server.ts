import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(express.json());
app.use(cors());

// 1. Rota raiz pura do servidor: http://localhost:3333/
app.get('/', (req, res) => {
  res.status(200).json({
    message: "🚀 SERVIDOR API Champions League 2026 rodando com sucesso! Para mais informações, acesse: http://localhost:3333/",
    author: "Higor de Campos",
    status: "Online"
  });
});

// 2. Rota de boas-vindas da API (atende /api e /api/)
app.get(['/api', '/api/'], (req, res) => {
  res.status(200).json({
    message: "🏆 Bem-vindo ao CORE da API Champions League 2026! Acesse:  http://localhost:3333/api/clubs (Clubes) e http://localhost:3333/api/players (Jogadores)",
    endpoints: {
      clubs: "/api/clubs",
      players: "/api/players"
    }
  });
});

// 3. Demais rotas da aplicação em /api/...
app.use('/api', router);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🔥 Servidor executando na porta ${port}`);
});