import { RaceKitten } from "./race-kitten.interface";
export class Kitten {

    constructor(
        public name: string,
        public race: string,
        public birthDay: Date,
        public image: string
    ) { }
}