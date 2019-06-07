import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // post que recibe del componente padre (posts)
  @Input()
  post: any;

  // Evento al componente padre
  @Output()
  clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClickPost() {
    console.log(this.post.id);
    this.clickPost.emit(this.post.id);
  }
}
