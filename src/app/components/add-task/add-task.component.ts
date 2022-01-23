import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = "";
  day: string = "";
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("Por favor, escribe una tarea");
      return
    }

    const {text,day,reminder} = this
    const newTask = {text,day,reminder}

    // TODO emit event
    
  }

}
