import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ITask } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoForm !: FormGroup;

  //3 arrays for taks, inprogress & done section.
  tasks:ITask []=[];
  inprogress:ITask []=[];
  todo:ITask []=[];

  isEditEnabled:boolean=false;//conditionally show add & update button in form
  updatedIndex:any;//to update edited value.

  public data: any = {
    task: ""
  };

  constructor() { 
    this.todoForm = new FormGroup({
      task: new FormControl(this.data.task, [Validators.required])
    });
  }
  

  ngOnInit(): void {
  }

  public clearForm(): void {
    this.todoForm.reset();
  }

  //add task button click:
  addTask(){
    this.tasks.push({
      description:this.todoForm.value.task,
      done:false
    });
    this.todoForm.reset();
  }

  //delete task
  deleteTask(index:number){
    this.tasks.splice(index,1);
  }

  deleteInprogressTask(index:number){
    this.inprogress.splice(index,1);
  }

  deleteDoneTask(index:number){
    this.todo.splice(index,1);
  }

  /*on click of edit icon button
  get clicked edit value and set it to the form textbox
  also isEditEnabled flag is use to disable add & update button of form conditionally
  while edit save button name should be update so set isEditEnabled=true
  also on edit save, we need to update edited value so set index to updatedIndex field
  to use it in updateTask() function*/
  onEdit(item:ITask,index:number){
    this.todoForm.controls['task'].setValue(item.description);
    this.updatedIndex=index;
    this.isEditEnabled=true;
  }

  updateTask(){
    this.tasks[this.updatedIndex].description=this.todoForm.value.task;
    this.tasks[this.updatedIndex].done=false;
    this.todoForm.reset();
    this.updatedIndex=undefined;
    this.isEditEnabled=false;
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
