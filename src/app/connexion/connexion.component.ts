
import
{Component, OnInit} from '@angular/core';
import {GestionUtilisateurService} from "../services/gestion-utilisateur.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";





@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  //@ts-ignore

  email:string;
  // @ts-ignore
  motDePasse:string;
  socket:any;
  // @ts-ignore
  message:string;

  constructor(private http:HttpClient,private router:Router, private util:GestionUtilisateurService) { }
  ngOnInit(): void {
  }

  onConnexion() {




    this.util.login(this.email).subscribe((result:any)=>{


      if (result.data[0].motDePasse === this.motDePasse){
        const utilisateur = [result.data[0].id];
        localStorage.setItem("key",JSON.stringify(utilisateur));

        console.log('connexion reussi!');
        this.router.navigate(['app-page-principale'],{queryParams:{nom:result.data[0].nom , prenom:result.data[0].prenom}});
      }else {
        console.log('erreur de connexion');
      }
    })
  }
}
