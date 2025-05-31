// server/routes/api/example.ts

// Route: /api/example

import { Router } from 'express';
import { getResponse } from '../../controllers/backendExample';

const router = Router();

router.get('/', getResponse);

export default router;