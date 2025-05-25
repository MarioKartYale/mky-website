export type IndividualResult = {
  netid: string;
  name: string;
  college: string;
  place: number;
  points: number;
}

export type Race ={
  id: number;
  eventId: number;
  eventName: string;
  time: string;
  track: string;
  results: IndividualResult[];
}