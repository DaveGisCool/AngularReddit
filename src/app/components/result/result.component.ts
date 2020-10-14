import { Component, Input, OnInit } from '@angular/core';
import { PostInfo, Children, Child, PostData } from '../../interfaces/post-info';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() post: Child;

  child:Child;

  constructor(private redditService:DataRequestService) { }

  ngOnInit(): void {
  }

}
