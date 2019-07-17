import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading('espere');

    setTimeout(() => {
      this.loading.dismiss();// cancela el loading
    }, 1500);
  }

  async presentLoading( menssge: string ) {
    this.loading = await this.loadingController.create({
      message: menssge,
      // duration: 2000
    });
    return this.loading.present();
  }

}
