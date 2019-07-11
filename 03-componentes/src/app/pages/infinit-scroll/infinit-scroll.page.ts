import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit-scroll',
  templateUrl: './infinit-scroll.page.html',
  styleUrls: ['./infinit-scroll.page.scss'],
})
export class InfinitScrollPage implements OnInit {

  data: any[] = Array(20);
  constructor() { }

  @ViewChild(IonInfiniteScroll) ionInfiniteScroll: IonInfiniteScroll;
  
  ngOnInit() {
  }


  loadData( event ) {
    console.log('Load more info');

    setTimeout(() => {

      const nuevoArr = Array(20);
      if (this.data.length >= 50) {
        event.target.complete();
        this.ionInfiniteScroll.disabled = true;
        return;
      }

      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000);
  }

 
}
