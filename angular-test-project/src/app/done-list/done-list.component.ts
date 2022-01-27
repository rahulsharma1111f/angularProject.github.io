import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  @Output() doneListUpdateEmitter = new EventEmitter()

  private doneList: Array<Task> = new Array()

  constructor() { }

  ngOnInit(): void {
  }

  public setDoneList = (data: Task): void => {
    this.doneList.push(data);
  }


  public getDoneList = (): Array<Task> => {
    return this.doneList
  }

  public checkboxValueChange = (i: number): void => {
    this.doneListUpdateEmitter.emit(i);
    console.log('value change', i)
  }

  public returnIndexObject = (i: number): Task => {
    return this.doneList[i]
  }

  public updateDoneList = (i: number): void => {
    this.doneList.splice(i, 1);
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
