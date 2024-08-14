import { connection } from './adapters/database/connection.js';
import startServer from './frameworks/express.js'
import env from './config/envConfig.js';

const app = startServer();
connection()
const PORT = env.PORT;

app.listen(PORT,()=>{
    console.log("APP running on ",PORT);
})