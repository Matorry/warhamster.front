import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament, TournamentCreateDto, TournamentUpdateDto } from '../models/tournament.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentRepoService {
  private apiUrl = 'http://localhost:7373/tournament'

  constructor(private http: HttpClient) { }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.apiUrl}`);
  }

  getTournamentById(id: string): Observable<Tournament> {
    return this.http.get<Tournament>(`${this.apiUrl}/${id}`);
  }

  getTournamentsByParticipant(participantId: string): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.apiUrl}/participant/${participantId}`);
  }

  createTournament(userData: TournamentCreateDto): Observable<Tournament> {
    return this.http.post<Tournament>(`${this.apiUrl}/`, userData);
  }

  updateTournament(id: string, userData: TournamentUpdateDto): Observable<Tournament> {
    return this.http.patch<Tournament>(`${this.apiUrl}/${id}`, userData);
  }

  deleteTournament(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
