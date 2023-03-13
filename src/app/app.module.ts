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
import { AccueilComponent } from './accueil/accueil.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { ConnexionComponent } from './connexion/connexion.component';



const appRoutes :Routes= [
  {path : 'inscription', component:InscriptionComponent},
  {path : 'app-page-principale',component:PagePrincipaleComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'accueil',component:AccueilComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PiedDePageComponent,
    ZonePrincipaleComponent,
    ZoneDeGaucheComponent,
    InscriptionComponent,
    AccueilComponent,
    PagePrincipaleComponent,
    ConnexionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
