import {Personne} from "./personne";

export class Messages {
  constructor(public message:string) {
  }
  toString(): string{
    return this.message;

  }
}
