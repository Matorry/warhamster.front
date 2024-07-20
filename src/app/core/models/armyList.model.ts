import { MatchParticipant } from './matchParticipant.model';
import { User } from './user.model';

export interface ArmyList {
  id: string;
  name: string;
  roster: string;
  faction: string;
  subFaction: string;
  owner?: User;
  armyMatchLists?: MatchParticipant[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ArmyListCreateDto {
  name: string;
  roster: string;
  faction: string;
  subFaction: string;
  ownerId: string;
}

export interface ArmyListUpdateDto {
  name?: string;
  roster?: string;
  faction?: string;
  subFaction?: string;
}
