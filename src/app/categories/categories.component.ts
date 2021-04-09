import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private data: PostService) { }
  categories: Array<any>;
  private cat;
  ngOnInit(): void {
    this.categories=this.data.getCategories()._subscribe()
  }

}
