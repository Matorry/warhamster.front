import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArmyListRepoService } from 'src/app/core/services/army-list.repo.service';
import { MatchRepoService } from 'src/app/core/services/match.repo.service';
import { StateService } from 'src/app/core/services/state.service';
import { TournamentRepoService } from 'src/app/core/services/tournament.repo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule]
})
export class DashboardPage implements OnInit {
  private stateService = inject(StateService);
  private armyListRepoService = inject(ArmyListRepoService);
  private matchRepoService = inject(MatchRepoService);
  private tournamentRepoService = inject(TournamentRepoService);

  user: any;
  armyLists: any[] = [];
  matches: any[] = [];
  tournaments: any[] = [];

  ngOnInit() {
    this.stateService.getState().subscribe(state => {
      this.user = state.currentUser;
      if (this.user) {
        this.loadArmyLists();
        this.loadMatches();
        this.loadTournaments();
      }
    });
  }

  loadArmyLists() {
    if (this.user) {
      this.armyListRepoService.getArmyListsByOwner(this.user.id).subscribe(data => {
        this.armyLists = data;
      });
    }
  }

  loadMatches() {
    if (this.user) {
      this.matchRepoService.getMatchsByParticipant(this.user.id).subscribe(data => {
        this.matches = data;
      });
    }
  }

  loadTournaments() {
    if (this.user) {
      this.tournamentRepoService.getTournamentsByParticipant(this.user.id).subscribe(data => {
        this.tournaments = data;
      });
    }
  }
}
