import { Component } from '@angular/core';
import { Kitten } from '../models/kitten-model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {

  newKitten: Kitten = new Kitten (
    "",
    "",
    new Date(),
    ""
  );

  onSubmit() {
return this.newKitten
  }
}