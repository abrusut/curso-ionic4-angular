import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    console.log('INIT');
    this.posts = this.dataService.getPosts();
    /**this.dataService.getPosts()
      .subscribe(
          (posts: any[]) => {
            console.log(posts);
            this.posts = posts;
          }
      ); */
  }

  escucharClick( id: number ) {
    console.log('click en post id ' + id);
  }

}
