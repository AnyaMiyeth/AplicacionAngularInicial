import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
 numero1: number;
 numero2: number;
 resultado: number;

  ngOnInit(): void {

  }

  add(){
    this.resultado= this.numero1+this.numero2;
  }


}
