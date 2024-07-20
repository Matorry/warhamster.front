import { Match } from './match.model';
import { TournamentParticipant } from './tournamentParticipant.model';

export interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  result: string;
  details: string;
  participants?: TournamentParticipant[];
  matches?: Match[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TournamentCreateDto {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  result: string;
  details: string;
}

export interface TournamentUpdateDto {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  result?: string;
  details?: string;
}
