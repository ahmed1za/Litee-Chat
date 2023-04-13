export class Personne {
 constructor(public nom : string,
             public prenom : string ,
             public email:string,
             public numeTel : number,
             public dateDeNaissance: Date,
             public motDePasse:string) {
 }

 toString(): string{
   return this.nom+ ' '+ this.prenom;

 }

}
