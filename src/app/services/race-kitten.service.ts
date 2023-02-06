import { Injectable } from '@angular/core';
import { RaceKitten } from "../models/race-kitten.interface";

@Injectable({
  providedIn: 'root'
})
export class RaceKittenService {
  raceKittenForm!:RaceKitten[];
  getRaceKitten() {
   return [
      {
        race: "Ragdoll",
        img: "https://static8.depositphotos.com/1394326/1040/i/450/depositphotos_10405014-stock-photo-cat-on-books.jpg"
      },
      {
        race: "Main Coon",
        img: "https://st.depositphotos.com/1004199/4953/i/450/depositphotos_49538565-stock-photo-maine-coon-kitten.jpg"
      },

      {
        race: "Persan",
        img: "https://static4.depositphotos.com/1007995/299/i/450/depositphotos_2992919-stock-photo-siamese-cat.jpg"
      },

      {
        race: "Norvégien",
        img: "https://st2.depositphotos.com/1004592/5503/i/450/depositphotos_55030691-stock-photo-maine-coon-kitten.jpg"
      },
      {
        race: "Sphynx",
        img: "https://static5.depositphotos.com/1004199/452/i/450/depositphotos_4526863-stock-photo-devon-rex-cat-portrait-on.jpg"
      },
      {
        race: "Sacré de Birmanie",
        img: "https://st2.depositphotos.com/1833015/6617/i/450/depositphotos_66178971-stock-photo-burma-kitten-portrait-on-a.jpg"
      },
      {
        race: "Chartreux",
        img: "https://st.depositphotos.com/1006070/2716/i/450/depositphotos_27169405-stock-photo-small-gray-kitten-over-white.jpg"
      },
      {
        race: "Bombay",
        img: "https://st3.depositphotos.com/1785730/13436/i/450/depositphotos_134364996-stock-photo-black-cat-with-yellow-eyes.jpg"
      },
      {
        race: "Siamois",
        img: "https://st2.depositphotos.com/1067336/9495/i/450/depositphotos_94957566-stock-photo-siamese-kitten-isolate-on-white.jpg"
      }
    ]
  }
  constructor() { }
}
