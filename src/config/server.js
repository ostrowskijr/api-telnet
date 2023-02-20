import express from 'express';
import { Telnet } from 'telnet-client';

const server = express();
const connection = new Telnet();

server.use(express.json());
server.use(express.urlencoded({ extended : true }));

server.get('/', (req, res) => {
    res.send('Servidor express!');
});

server.post('/send-telnet', async (req, res) => {
    const { cmd } = req.body;
    console.log(`Comando para SEND server Telnet: ${cmd}`);
    try {
        console.log(`Abrindo conexão com servidor TelNet...`);
        connection.connect({
            host: '10.0.0.154',
            port: 2000,
            timeout: 5000
        });
        //
        console.log(`Conexão estabelecida, enviado dados...`);
        const response = await connection.exec(cmd);
        connection.end();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error })
    }
});

export { server };