import dotenv from 'dotenv';
import server from './server.js';

dotenv.config();

const main = async () => {
    server.listen(server.get('port'));
    console.log('API is running in ', server.get('port'));
};

main();