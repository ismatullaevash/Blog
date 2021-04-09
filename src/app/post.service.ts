import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost';
import { Observable } from 'rxjs';
const perPage = 6;
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPosts(page, tag, category): Observable<BlogPost[]> {
    let str=`https://ancient-badlands-34803.herokuapp.com/api/posts?page=`;
    str+=page+'&perPage='+perPage;
    if (tag != null || tag != undefined) {
      str+='&tag='+tag;

    }

    if (category != null || category != undefined) {
      str+='&category='+category;
    }
   
    return this.http.get<BlogPost[]>(str);
  }
  getPostByID(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://ancient-badlands-34803.herokuapp.com/api/posts/${id}`);
  }
  getCategories(): Observable<any> {
    return this.http.get<any>(`https://ancient-badlands-34803.herokuapp.com/api/categories`);
  }
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://ancient-badlands-34803.herokuapp.com/api/tags`);
  }
}
