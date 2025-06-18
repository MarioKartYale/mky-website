// server/routes/api/example.ts

// Route: /api/example

import { Router } from 'express';
import { getResponse, getUsers, getColleges, getRaces, getEvents } from '../../controllers/backendExample';
import { db } from '../../firebaseAdmin';

const router = Router();

router.get('/', getResponse);

router.get('/players', getUsers);

router.get('/colleges', getColleges);

router.get('/races', getRaces);

router.get('/events', getEvents);


export default router;


