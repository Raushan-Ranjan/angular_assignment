import { ErrorComponent } from './../error/error.component';
import { ApiCallService } from './../../api-call.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  author:string;
  detail:any=[];
  quotes:any=[];
  isLoading = false;

  constructor(private route:ActivatedRoute, private services : ApiCallService, private dialog : MatDialog) { }

  ngOnInit() {
    this.isLoading =true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.author = params.get('author');    
    });

    this.services.getDetail(this.id).subscribe(data =>{
      this.isLoading = false;
      this.detail=data;
})

this.services.getQuotes(this.author).subscribe(data =>{
this.quotes = data
})
     
  }

}
