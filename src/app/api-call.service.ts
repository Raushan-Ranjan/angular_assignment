import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public http:HttpClient) { }


  onCall(limit:number,offset:number){
    return this.http.get("https://www.breakingbadapi.com/api/characters?limit="+limit+"&offset="+offset+""); 
  }

  getDetail(id){
    return this.http.get("https://breakingbadapi.com/api/characters/"+id);
  }

  getList(){
    return this.http.get("https://www.breakingbadapi.com/api/characters");

  }

  getQuotes(author:string){
   return this.http.get("https://www.breakingbadapi.com/api/quote?author="+author);
  }


}
