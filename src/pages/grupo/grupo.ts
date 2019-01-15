import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the GrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html',
})
export class GrupoPage {

  item = [];
  nome_pessoa: string;
  grupo_id: string;
  grupo_nome: string;
  grupo = [];

  url = "https://webtec.inf.br/credeciamento.json";

  items = 
    [
      {
      "id": 1,
      "name": "Danismar Souza da Paz",
      "grupo": {
      "id": 1,
      "name": "Grupo 10",
      "sala": "1245",
      "created_at": "2014-01-01T00:00:00+0000",
      "updated_at": "2014-01-01T00:00:00+0000"
      },
      "sessao_sindical": "Brasilia/DF",
      "slug": "danismar-souza-da-paz",
      "created_at": "2019-01-12T20:09:20+0000",
      "updated_at": "2019-01-12T20:14:03+0000"
      },
      {
      "id": 2,
      "name": "Mateus Pereira da Silva",
      "grupo": {
      "id": 2,
      "name": "Grupo 05",
      "sala": "1222",
      "created_at": "2014-01-01T00:00:00+0000",
      "updated_at": "2014-01-01T00:00:00+0000"
      },
      "sessao_sindical": "Goiania/GO",
      "slug": "mateus-pereira-da-silva",
      "created_at": "2019-01-12T20:26:31+0000",
      "updated_at": "2019-01-12T20:26:31+0000"
      },
      {
      "id": 3,
      "name": "Carlos Eduardo Batista",
      "grupo": {
      "id": 2,
      "name": "Grupo 05",
      "sala": "1222",
      "created_at": "2014-01-01T00:00:00+0000",
      "updated_at": "2014-01-01T00:00:00+0000"
      },
      "sessao_sindical": "Belo Horizonte/MG",
      "slug": "carlos-eduardo-batista",
      "created_at": "2019-01-13T14:53:13+0000",
      "updated_at": "2019-01-13T14:53:13+0000"
      },
      {
      "id": 4,
      "name": "Luciana da Luz",
      "grupo": {
      "id": 1,
      "name": "Grupo 10",
      "sala": "1245",
      "created_at": "2014-01-01T00:00:00+0000",
      "updated_at": "2014-01-01T00:00:00+0000"
      },
      "sessao_sindical": "Palmas/TO",
      "slug": "luciana-da-luz",
      "created_at": "2019-01-14T18:22:55+0000",
      "updated_at": "2019-01-14T18:32:02+0000"
      }
      ];
      negrito1 = "";
      negrito2 = "";
      obs: Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpClient: HttpClient) {

     this.obs = this.HttpClient.get(this.url);

     

    //  this.obs
    // .subscribe(data => {
     
    //  console.log(data);
    // })

    

    this.item = navParams.get('item');
    this.grupo_id = this.item.grupo;
    this.grupo_nome = this.item.nome_grupo;
    this.nome_pessoa = this.item.nome_pessoa;

    
    
    this.items.forEach(element => {
      
      //  console.log(element.grupo.id);
      if(element.grupo.id == this.grupo_id){
        if(element.name == this.item.nome_pessoa){
          this.negrito1 = "<b>";
          this.negrito2 = "</b>";
        }else{
          this.negrito1 = "";
          this.negrito2 = "";
        }
        this.grupo.push({
          nome_pessoa: this.negrito1+element.name+this.negrito2,
          sessao: element.sessao_sindical,
        }
        );
      }
      
     });
     

    this 
    // console.log(this.grupo_id+this.grupo_nome);
  }
}
