import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoneListComponent } from '../done-list/done-list.component';
import { Task, ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  @ViewChild(ToDoListComponent, { static: true }) public toDolistComponent: ToDoListComponent
  @ViewChild(DoneListComponent, { static: true }) public donelistComponent: DoneListComponent

  public form: FormGroup;
  public list: { id: number, value: string }[] = [{ id: 1, value: 'Y' }, { id: 2, value: 'N' }]


  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.createForm.bind(this)();
  }

  public createForm = (): void => {
    this.form = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],
      repeatingTask: ['', Validators.required],
    })
  }

  public valueChanged = (): void => {
    const taskNameValue = this.form.getRawValue().taskName;
    const taskNameDesValue = this.form.getRawValue().taskDescription;
    const repeatingTaskValue = this.form.getRawValue().repeatingTask;

    console.log(taskNameValue, 'taskNameValue')
    console.log(taskNameDesValue, 'taskNameDesValue')
    console.log(repeatingTaskValue, 'repeatingTaskValue')


    if (!taskNameValue || !taskNameDesValue || !repeatingTaskValue) {
      return;
    }

    const object: Task = {
      taskName: taskNameValue,
      taskDescription: taskNameDesValue,
      repeatingTask: repeatingTaskValue
    }
    this.toDolistComponent.setToDOList(object)
    this.form.reset();
  }

  public toDoListUpdate = (i: number): void => {
    const obj = this.toDolistComponent.returnIndexObject(i);
    this.donelistComponent.setDoneList(obj);
    this.toDolistComponent.updateToDoList(i);
  }

  public doneListUpdate = (i: number): void => {
    const obj = this.donelistComponent.returnIndexObject(i);
    this.toDolistComponent.setToDOList(obj);
    this.donelistComponent.updateDoneList(i);
  }

}
