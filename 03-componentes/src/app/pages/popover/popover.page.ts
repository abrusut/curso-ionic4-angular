import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento: any) {
      const popover = await this.popoverController.create({
        component: PopinfoComponent,
        event: evento,
        mode: 'ios',
        backdropDismiss: false,
      });
      await popover.present();
      
      // const { data } = await popover.onDidDismiss() ; // Cuando efectivamente se cerro completo

      const { data } = await popover.onWillDismiss() ; // Cuando se esta cerrando

      console.log(`Padre `, data);
  }
}
