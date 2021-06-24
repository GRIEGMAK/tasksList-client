import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  name: string="";
  todos: string[]=[];

  constructor() { }


  ngOnInit() {
    this.todos = ["1-я задача", "2-я задача", "3-я задача"];
    this.name = 'Задачи';
  }

}
