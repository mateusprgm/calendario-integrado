import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PublicacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicacoes',
  templateUrl: 'publicacoes.html',
})
export class PublicacoesPage {

  noticia: Object = [];
  
  aaa; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let index = 0; index < 10; index++) {
      this.aaa = Array.length;
      this.noticia[index] = {
        results:{
         titulo: "Publicação"+index,
         descricao: "Descrição"+index,
      }
 
      };
      
     }
     console.log(this.noticia+this.aaa);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
