// server/controllers/backendExample.ts

import { Request, Response } from 'express';

export const getResponse = (_req: Request, res: Response) => {
  res.json({ message: 'The backend is ready to roll 😈' });
};