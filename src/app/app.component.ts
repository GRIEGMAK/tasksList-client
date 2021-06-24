import { Component } from '@angular/core';
import { ProjectsService } from './projects.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private projects:ProjectsService){
    this.projects.getData()
  }
}