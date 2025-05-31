// server/index.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { logger } from './middleware/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use(routes);

console.log('Initializing server...');

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} 😈`);
});