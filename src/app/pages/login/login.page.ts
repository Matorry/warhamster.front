import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { StateService } from 'src/app/core/services/state.service';
import { UserRepoService } from 'src/app/core/services/user.repo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
})
export class LoginPage {
  private userService = inject(UserRepoService);
  private state = inject(StateService);
  private toastController = inject(ToastController);
  private router = inject(Router);
  email: string = '';
  pswd: string = '';

  async submit() {
    this.userService.login({ email: this.email, pswd: this.pswd }).subscribe({
      next: async (data) => {
        this.state.setLogin(data.token);
        const toast = await this.toastController.create({
          message: 'Login successful!',
          duration: 2000,
          position: 'top',
        });
        toast.present();
        this.router.navigate(['/dashboard']);
      },
      error: async (error: Error) => {
        const toast = await this.toastController.create({
          message: 'Login failed. Please check your credentials.',
          duration: 2000,
          position: 'top',
        });
        toast.present();
        console.log(error.message);
      },
    });
  }
}
