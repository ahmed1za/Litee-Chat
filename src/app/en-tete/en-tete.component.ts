import { Input,Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent {
  @Input()
  nomApplication: String | undefined;


  onUrl() {

  }
  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigate(['authentification']);

  }

  onClickCon() {
    this.router.navigate(['connexion']);
  }
}
