import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { ApiCallService } from './../../api-call.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  characters : any = [];

  totalCharacter = 0;
  postsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [10];
  modifiedList : any = [];
 isLoading = false;

  constructor(public apiCallService: ApiCallService){}

  ngOnInit(){
      this.isLoading = true;
   this.apiCallService.getList().subscribe(data =>{
     this.modifiedList = data;
     this.totalCharacter = Object.keys(this.modifiedList).length;
     this.modifiedList = [];

   })

    this.apiCallService.onCall(this.postsPerPage,this.currentPage-1).subscribe(data =>{
         this.isLoading = false;
        this.characters =data;
      });   

  }

  onChangePage(page : PageEvent){
    this.isLoading =true;
    this.currentPage = page.pageIndex+1;
    var skip = page.pageSize * (this.currentPage - 1) ; 
   this.apiCallService.onCall(this.postsPerPage,skip).subscribe(data =>{
     this.isLoading  = false;
     this.characters = data;
   })
       
  }


}
