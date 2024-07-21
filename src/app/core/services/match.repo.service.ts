import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match, MatchCreateDto, MatchUpdateDto } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchRepoService {
  private apiUrl = 'http://localhost:7373/match'

  constructor(private http: HttpClient) { }

  getMatchs(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}`);
  }

  getMatchById(id: string): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`);
  }

  getMatchsByParticipant(participantId: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/participant/${participantId}`);
  }

  createMatch(userData: MatchCreateDto): Observable<Match> {
    return this.http.post<Match>(`${this.apiUrl}/`, userData);
  }

  updateMatch(id: string, userData: MatchUpdateDto): Observable<Match> {
    return this.http.patch<Match>(`${this.apiUrl}/${id}`, userData);
  }

  deleteMatch(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
