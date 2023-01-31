import { Component, OnInit } from '@angular/core';
import { Kitten } from './models/kitten-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kitten-story';

  kittenList: Array<object> = [];
  onReceiveNewKitten(event: object): void {
    this.kittenList.push(event)
  };

  ngOnInit(): void {
    this.kittenList = [
      {
        name: "Stipo",
        race: "Bombay",
        birthDay: new Date(2023, 0, 7),
        image: "https://st.depositphotos.com/1594920/2454/i/450/depositphotos_24542991-stock-photo-bombay-cat-looking-at-the.jpg"
      },
      {
        name: "Oscar",
        race: "Chartreux",
        birthDay: new Date(2023, 0, 7),
        image: "https://static9.depositphotos.com/1594920/1089/i/450/depositphotos_10893312-stock-photo-chartreux-cat-16-months-old.jpg"
      },
      {
        name: "Luca",
        race: "Persan",
        birthDay: new Date(2023, 0, 7),
        image: "https://st3.depositphotos.com/1004199/12854/i/450/depositphotos_128544320-stock-photo-young-persian-cat.jpg"
      }
    ]
  }
}
