import { RaceKitten } from "./race-kitten.interface";
export class Kitten {

    constructor(
        public name: string,
        public race: string,
        public birthDay: string,
        public image: string
    ) { }
}