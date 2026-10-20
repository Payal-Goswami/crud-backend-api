import app from './src/app.js';
import connectDB from './db/db.js';
import 'dotenv/config';
const PORT = process.env.PORT;
connectDB();
app.listen(PORT, ()=>{console.log("server is running on port", PORT)});