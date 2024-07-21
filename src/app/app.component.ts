import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StateService } from './core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, IonApp, IonRouterOutlet],
})
export class AppComponent {
  private stateService = inject(StateService);

  constructor() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.stateService.setLogin(token);
    }
  }

}
