import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  response: any;

  constructor(private http:HttpClient) {}
  
  getData(){
    let url = "https://taskslist339.herokuapp.com/projects";
    this.http.get(url)
    .subscribe(response=>{
      this.response = response;
      console.log(this.response)
    },
    error => {
      console.log(error);
  })
  }
}
