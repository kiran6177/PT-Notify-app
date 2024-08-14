import { connection } from './adapters/database/connection.js';
import startServer from './frameworks/express.js'

const app = startServer();
connection()
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("APP running on ",PORT);
})