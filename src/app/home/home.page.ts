import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastRiferimento: ToastController) {}

  async funzioneToast() {
    const toastOggetto = await this.toastRiferimento.create({
      message: 'Frank non è stato eletto!',
      duration: 1500,
      position: "middle"
    });

    await toastOggetto.present();
  }

}
