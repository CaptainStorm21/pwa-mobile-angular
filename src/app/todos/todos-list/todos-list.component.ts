import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos: Todo[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
        this.todos = data;
        console.log(this.todos);
      }
    );
  }

  onSelectedTodo(event){
    console.log(event);
  }
}
