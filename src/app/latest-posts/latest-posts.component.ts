import { Component, OnInit,Input } from '@angular/core';
import {BlogPost} from '../BlogPost'

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  constructor() { }
  @Input() posts:BlogPost;
  ngOnInit(): void {
  }

}
