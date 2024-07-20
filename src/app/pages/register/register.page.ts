import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { UserCreateDto } from 'src/app/core/models/user.model';
import { UserRepoService } from 'src/app/core/services/user.repo.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule]
})
export class RegisterPage {
  private userService = inject(UserRepoService);
  private toastController = inject(ToastController);
  private router = inject(Router);
  user: UserCreateDto = {
    userName: '',
    email: '',
    pswd: '',
    role: 'user',
    birthDate: new Date()
  };

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async register() {
    if (typeof this.user.birthDate !== 'string') {
      this.user.birthDate = (this.user.birthDate as Date).toISOString().split('T')[0];
    }

    this.userService.register(this.user).subscribe({
      next: async (newUser) => {
        this.presentToast('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: async (error: Error) => {
        this.presentToast('Registration failed. Please try again.');
        console.log(error.message);
      }
    });
  }
}
