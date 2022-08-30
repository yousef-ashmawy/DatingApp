import { Photo } from "./photo";

export interface User {
  Id: number;
  username: string;
  gender: string;
  dateofbirth: Date;
  knownas: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  introduction?: string;
  lookingFor?: string;
  intersets?: string;
  photos?: Photo[];
}
