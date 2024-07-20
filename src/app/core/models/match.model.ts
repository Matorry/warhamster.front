import { MatchParticipant } from './matchParticipant.model';
import { Tournament } from './tournament.model';

export interface Match {
  id: string;
  date: Date;
  result: string;
  details: string;
  participants?: MatchParticipant[];
  tournament?: Tournament;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchCreateDto {
  date: Date;
  result: string;
  details: string;
  tournamentId?: string;
}

export interface MatchUpdateDto {
  date?: Date;
  result?: string;
  details?: string;
  tournamentId?: string;
}
