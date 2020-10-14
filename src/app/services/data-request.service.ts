import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInfo } from '../interfaces/post-info';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http:HttpClient) { }

  getPostInfo() {
    return this.http.get<PostInfo>('https://www.reddit.com/r/aww/.json');
  }

}
