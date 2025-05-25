export type IndividualResult = {
  netid: string;
  name: string;
  college: string;
  place: number;
  points: number;
  lap1: string;
  lap2: string;
  lap3:string
}

export type Race ={
  id: number;
  eventId: number;
  eventName: string;
  time: string;
  track: string;
  results: IndividualResult[];
}