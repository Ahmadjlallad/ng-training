import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostHttp {
  constructor() {}
  createPost(title: string, content: string) {}
}
