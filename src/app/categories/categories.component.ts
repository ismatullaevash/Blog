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

  ngOnInit(): void {
    this.data.getCategories().subscribe(data => this.categories = data);
  }

}
