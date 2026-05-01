import 'dotenv/config';
import { server } from '../src/main/server.ts';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://${HOST}:${PORT}`);
});
