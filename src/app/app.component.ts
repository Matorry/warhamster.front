import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StateService } from './core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private stateService = inject(StateService);

  ngOnInit() {
    this.stateService.checkLogin();
  }
}
