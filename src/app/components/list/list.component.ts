import { Component, OnInit } from '@angular/core';
import { PostInfo, Children, Child, PostData } from '../../interfaces/post-info';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postinfo: PostInfo;

  constructor(private redditService:DataRequestService) { }

  ngOnInit(): void {
    this.redditService.getPostInfo().subscribe(
      (data:PostInfo) => this.postinfo = data
    )
  }

}
