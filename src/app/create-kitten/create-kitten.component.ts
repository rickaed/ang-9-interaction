import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kitten } from '../models/kitten-model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  newKitten: Kitten = new Kitten(
    "",
    "",
    new Date(""),
    ""
  );


  

  @Output() sendNewKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  onSubmit() {
    // console.log(this.newKitten) /*fonctionne*/
    this.sendNewKitten.emit(this.newKitten);
    
  }

  ngOnInit(): void {
  }
}