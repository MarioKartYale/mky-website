// server/routes/index.ts

import { Router } from 'express';
import exampleRouter from './api/example';

const router = Router();

router.use('/api/example', exampleRouter);

export default router;