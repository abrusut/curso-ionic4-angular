import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albunes: any[];
  textoABuscar: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbunes()
                    .subscribe( ( data: any[] ) => {
                                console.log(data);
                                this.albunes = data;
                        });
  }

  buscar(event) {
    console.log(event);
    this.textoABuscar = event.detail.value;
  }

}
