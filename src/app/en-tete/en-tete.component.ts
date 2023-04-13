import {Input, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit{
  @Input()
  nomApplication: String | undefined;
  //@ts-ignore
 nom:string;
  //@ts-ignore
 prenom:string;


  onUrl() {

  }
  constructor(private router: Router,private route:ActivatedRoute) {
  }

  onClick() {
    this.router.navigate(['inscription']);

  }

  onClickCon() {
    this.router.navigate(['connexion']);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.nom=params['nom'];
      this.prenom=params['prenom'];
  })
}

  onLogin() {
    this.router.navigate(['connexion']);
  }
}

