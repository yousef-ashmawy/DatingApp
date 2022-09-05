import { Photo } from "./photo";

export interface User {
  Id: number;
  username: string;
  gender: string;
  dateofbirth: Date;
  knownAs: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  intersets?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
