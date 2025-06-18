
 import { db } from '../firebaseAdmin';
import { Request, Response } from 'express';

export const getResponse = (_req: Request, res: Response) => {
  res.json({ message: 'The backend is ready to roll 😈' });
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    console.log("Fetching players from Firestore...");
    
    const playersSnapshot = await db.collection('players').get();
    const players = playersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({ players });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch players." });
  }
};


export const getColleges = async (_req: Request, res: Response) => {
  try {
    console.log("Fetching colleges data from Firestore...");
    
    const collegesSnapshot = await db.collection('colleges').get();
    const colleges = collegesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({ colleges });
  } catch (error) {
    console.error("Error fetching data on colleges:", error);
    res.status(500).json({ error: "Failed to fetch data on colleges." });
  }
};

export const getRaces = async (_req: Request, res: Response) => {
  try {
    console.log("Fetching races data from Firestore...");
    
    const racesSnapshot = await db.collection('races').get();
    const races = racesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({ races });
  } catch (error) {
    console.error("Error fetching data on races:", error);
    res.status(500).json({ error: "Failed to fetch data on races." });
  }
};

export const getEvents = async (_req: Request, res: Response) => {
  try {
    console.log("Fetching colleges data from Firestore...");
    
    const eventsSnapshot = await db.collection('events').get();
    const events = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({ events });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events." });
  }
};