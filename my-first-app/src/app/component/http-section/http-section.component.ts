import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-http-section',
  templateUrl: './http-section.component.html',
  styleUrls: ['./http-section.component.scss'],
})
export class HttpSectionComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-367dd-default-rtdb.firebaseio.com/posts.json',
        postData, // angular will convert it to json
        {
          observe: 'response',
        }
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    // if u not subscribe to it will not be send
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPost() {
    // multiple params we have to append it
    let params = new HttpParams().set('print', 'pretty');
    params = params.append('me', 'p');

    this.http
      .get<{ [key: string]: Post }>(
        'https://angular-367dd-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'custom-header': 'hello' }),
          params,
        }
      )
      .pipe(
        map((post: { [key: string]: Post }) => {
          const postNewForm: Post[] = Object.entries(post).map(
            ([key, value]) => ({
              ...value,
              id: key,
            })
          );
          return postNewForm;
        })
      )
      .subscribe((post) => {
        this.loadedPosts = post;
      });
  }
}
/**
 * -MvJ38H-KB3aqsQfl6SY:
content: "my first post"
title: "new post"
 */
