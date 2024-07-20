import { ArmyList } from './armyList.model';
import { Tournament } from './tournament.model';
import { User } from './user.model';

export interface TournamentParticipant {
  id: string;
  user: User;
  armyList: ArmyList;
  tournament?: Tournament;
  createdAt: Date;
  updatedAt: Date;
}

export interface TournamentParticipantCreateDto {
  userId: string;
  armyListId: string;
  tournamentId: string;
}

export interface TournamentParticipantUpdateDto {
  userId?: string;
  armyListId?: string;
  tournamentId?: string;
}
