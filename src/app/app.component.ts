import { Component, OnInit } from '@angular/core';
import { Kitten } from './models/kitten-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kitten-story';

  kittensList: Kitten[] = [];
  userKittenList: Kitten[] = [];


  receiveNewKitten(event: Kitten): void {
    // console.log(this.kittensList) /* fonctionne */
    this.kittensList.push(event)
  };

  myKittens(event: any) {
    this.userKittenList.push(this.kittensList[event]);
     this.kittensList.splice(event,1)
    
  }

  ngOnInit(): void {
    this.kittensList = [
      {
        name: "Stipo",
        race: "Bombay",
        birthDay: "07 01 2020",
        image: "https://st.depositphotos.com/1594920/2454/i/450/depositphotos_24542991-stock-photo-bombay-cat-looking-at-the.jpg"
      },
      {
        name: "Oscar",
        race: "Chartreux",
        birthDay: "07 01 2020",
        image: "https://static9.depositphotos.com/1594920/1089/i/450/depositphotos_10893312-stock-photo-chartreux-cat-16-months-old.jpg"
      },
      {
        name: "Luca",
        race: "Persan",
        birthDay: "07 01 2020",
        image: "https://st3.depositphotos.com/1004199/12854/i/450/depositphotos_128544320-stock-photo-young-persian-cat.jpg"
      }
    ]
  }
}
