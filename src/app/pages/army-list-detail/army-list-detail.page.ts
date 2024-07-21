import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArmyList } from 'src/app/core/models/armyList.model';
import { ArmyListRepoService } from 'src/app/core/services/army-list.repo.service';


@Component({
  selector: 'app-army-list-detail',
  templateUrl: './army-list-detail.page.html',
  styleUrls: ['./army-list-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class ArmyListDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private armyListService = inject(ArmyListRepoService);
  armyList: ArmyList | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.armyListService.getArmyListById(id).subscribe(data => {
        this.armyList = data;
      });
    }
  }

  editArmyList() {
    // Implement edit functionality
  }

  deleteArmyList() {
    // Implement delete functionality
  }
}
