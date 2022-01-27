import { Component, EventEmitter, OnInit, Output } from '@angular/core';


export interface Task {
  taskName: string;
  taskDescription: string,
  repeatingTask: number
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Output() toDoListUpdateEmitter = new EventEmitter()

  private toDoList: Array<Task> = new Array()

  constructor() { }

  ngOnInit(): void {
  }

  public setToDOList = (data: Task): void => {
    this.toDoList.push(data);
  }


  public getToDoList = (): Array<Task> => {
    return this.toDoList
  }

  public checkboxValueChange = (i: number): void => {
    console.log('value change', i)
    this.toDoListUpdateEmitter.emit(i);
  }

  public returnIndexObject = (i: number): Task => {
    return this.toDoList[i]
  }

  public updateToDoList = (i: number): void => {
     this.toDoList.splice(i, 1);
  }

  public showRepeatingTask = (i: string): string => {
    if (!i) {
      return;
    }
    switch (i) {
      case '1': return 'Y';
      case '2': return 'N';
    }
  }
}
