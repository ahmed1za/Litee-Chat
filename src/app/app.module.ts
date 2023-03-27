import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { ZonePrincipaleComponent } from './zone-principale/zone-principale.component';
import { ZoneDeGaucheComponent } from './zone-de-gauche/zone-de-gauche.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {RouterModule, Routes} from "@angular/router";

import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { ConnexionComponent } from './connexion/connexion.component';

import {NgOptimizedImage} from "@angular/common";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ParametresComponent} from "./parametres/parametres.component";


const appRoutes :Routes= [
  {path : 'inscription', component:InscriptionComponent},
  {path : 'app-page-principale',component:PagePrincipaleComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'accueil',component:AcceuilComponent},
  {path:'parametres',component:ParametresComponent},
  {path:'',component:AcceuilComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PiedDePageComponent,
    ZonePrincipaleComponent,
    ZoneDeGaucheComponent,
    InscriptionComponent,
    AcceuilComponent,
    PagePrincipaleComponent,
    ConnexionComponent,
    ParametresComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
