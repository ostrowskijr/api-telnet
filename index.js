import { server } from './src/config/server.js';
const PORT = process.env.SERVER_PORT || 3030;

server.listen(PORT, (error) => {
    if (error) {
        console.log('Error start server on Port ' + PORT + ' - Msg: ' + error);
    } else {
        console.log('Server start on Port ' + PORT);
    }
});