import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiaPage } from '../noticia/noticia';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  noticia: Object = [];
  
  aaa;     
  constructor(public navCtrl: NavController) {
    for (let index = 0; index < 10; index++) {
     this.aaa = Array.length;
     this.noticia[index] = {
       results:{
        titulo: "Noticia"+index,
        descricao: "Descrição"+index,
     }

     };
     
    }
    console.log(this.noticia+this.aaa);
  }
  pushPageN(titulo, descricao){
    this.navCtrl.push(NoticiaPage, {
        noticia: {
            titulo: titulo,
            descricao: descricao,
        }
    });
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  

}
