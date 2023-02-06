import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/kitten-model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {

  @Input() kittenList!: Kitten[];

  @Output()

  @Output() adoptKitten: EventEmitter<number> = new EventEmitter();

  onSubmit(index: number) {

    this.adoptKitten.emit(index)

  }
}
