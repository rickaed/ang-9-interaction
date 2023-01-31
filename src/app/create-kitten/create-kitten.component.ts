import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten-model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  newKitten: Kitten = new Kitten (
    "",
    "",
    new Date(""),
    ""
  );

  @Output()
  sendNewKitten:EventEmitter<object>=new EventEmitter
  
  onSubmit() {
    console.log(this.newKitten)
this.sendNewKitten.emit(this.newKitten);
  }
  
  ngOnInit(): void {
   
  }
}