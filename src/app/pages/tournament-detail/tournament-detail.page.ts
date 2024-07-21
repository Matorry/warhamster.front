import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tournament } from 'src/app/core/models/tournament.model';
import { TournamentRepoService } from 'src/app/core/services/tournament.repo.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.page.html',
  styleUrls: ['./tournament-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class TournamentDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private tournamentService = inject(TournamentRepoService);
  tournament: Tournament | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tournamentService.getTournamentById(id).subscribe(data => {
        this.tournament = data;
      });
    }
  }

  editTournament() {
    // Implement edit functionality
  }

  deleteTournament() {
    // Implement delete functionality
  }
}
