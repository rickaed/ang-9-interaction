import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kitten } from '../models/kitten-model';
import { RaceKittenService } from '../services/race-kitten.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  constructor(private receKittenServ: RaceKittenService) { }

  newKitten: Kitten = new Kitten("", "", "", "");
  raceKitten: any;

  ngOnInit(): void {
    this.getRaceKitten();
  }

  getRaceKitten() {
    this.raceKitten = this.receKittenServ.getRaceKitten();
  }

  captImg(img: string) {
    this.newKitten.image = img
  }

  @Output() sendNewKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  onSubmit(form: NgForm) {
    this.sendNewKitten.emit(this.newKitten);
   

  }


}