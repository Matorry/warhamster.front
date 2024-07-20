import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArmyList, ArmyListCreateDto, ArmyListUpdateDto } from '../models/armyList.model';

@Injectable({
  providedIn: 'root'
})
export class ArmyListRepoService {
  private apiUrl = 'http://localhost:7373/armylist'

  constructor(private http: HttpClient) { }

  getArmyList(): Observable<ArmyList[]> {
    return this.http.get<ArmyList[]>(`${this.apiUrl}`);
  }

  getArmyListById(id: string): Observable<ArmyList> {
    return this.http.get<ArmyList>(`${this.apiUrl}/${id}`);
  }

  getArmyListsByOwner(ownerId: string): Observable<ArmyList[]> {
    return this.http.get<ArmyList[]>(`${this.apiUrl}/owner/${ownerId}`);
  }

  createArmyList(userData: ArmyListCreateDto): Observable<ArmyList> {
    return this.http.post<ArmyList>(`${this.apiUrl}/`, userData);
  }

  updateArmyList(id: string, userData: ArmyListUpdateDto): Observable<ArmyList> {
    return this.http.patch<ArmyList>(`${this.apiUrl}/${id}`, userData);
  }

  deleteArmyList(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
