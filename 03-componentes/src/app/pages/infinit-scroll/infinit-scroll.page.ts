import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinit-scroll',
  templateUrl: './infinit-scroll.page.html',
  styleUrls: ['./infinit-scroll.page.scss'],
})
export class InfinitScrollPage implements OnInit {

  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }


  loadData( event ){
    console.log('Load more info');
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
    }, 1000);
  }

 
}
