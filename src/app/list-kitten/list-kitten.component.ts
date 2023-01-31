import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten-model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent{
  
  @Input() kittenList!:Kitten;
    
  

}
