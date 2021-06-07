import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//decorateur permettant de dire que c'est un composant
@Component({
  //permet de definir la balise per,ettant d'appeler le composant
  selector: 'app-et', 
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  
  listFormations:any; //variable sans type

  constructor(private httpClient:HttpClient) { }
  //methode contenant du code a execute au chargement du composant
  
  ngOnInit(): void {
    
    this.httpClient.get("http://localhost:8080/formations") 
      .subscribe(data=>{ //variable contenant le resultat de la requette
        this.listFormations=data; //on recupere le contenu de data
      },err=>{
        console.log(err);//message affichier s'il ya erreur
      });


  }

}
