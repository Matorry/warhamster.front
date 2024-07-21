import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Match } from 'src/app/core/models/match.model';
import { MatchRepoService } from 'src/app/core/services/match.repo.service';


@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class MatchDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private matchService = inject(MatchRepoService);
  match: Match | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.matchService.getMatchById(id).subscribe(data => {
        this.match = data;
      });
    }
  }

  editMatch() {
    // Implement edit functionality
  }

  deleteMatch() {
    // Implement delete functionality
  }
}
