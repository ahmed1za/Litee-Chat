import {Personne} from "./personne";

export class Messages {
  constructor(public message:string,public envoyeur_id:number,public destinataire_id:number) {
  }
  toString(): string{

    return this.message;

  }
}
