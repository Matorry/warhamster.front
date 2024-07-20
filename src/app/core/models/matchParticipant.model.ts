import { ArmyList } from './armyList.model';
import { Match } from './match.model';
import { User } from './user.model';

export interface MatchParticipant {
  id: string;
  user: User;
  army: ArmyList;
  match: Match;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchParticipantCreateDto {
  userId: string;
  armyId: string;
  matchId: string;
}

export interface MatchParticipantUpdateDto {
  userId?: string;
  armyId?: string;
  matchId?: string;
}
