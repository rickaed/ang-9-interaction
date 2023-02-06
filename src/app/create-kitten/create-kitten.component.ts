import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten-model';
import { RaceKittenService } from '../services/race-kitten.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  constructor(private receKittenServ: RaceKittenService) { }

  newKitten: Kitten = new Kitten("", "", new Date, "");
  raceKitten: any;

  ngOnInit(): void {
    this.getRaceKitten();
  }

  getRaceKitten() {
    this.raceKitten = this.receKittenServ.getRaceKitten();
    console.log(this.raceKitten);
  }

  captIndex(img: string) {
    this.newKitten.image = img
    console.log(img);


  }
  @Output() sendNewKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  onSubmit() {
    this.sendNewKitten.emit(this.newKitten);
  }


}