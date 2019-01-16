import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ContactPage } from '../contact/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NoticiaPage } from '../noticia/noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public slidesOptions = [];
 

  url = "http://webtecsites.com.br/api/doc/noticias";

  obs:Observable<any>;
  public noticias: Array<Object>;

  constructor(public navCtrl: NavController, public HttpClient: HttpClient) {

    
    this.obs = HttpClient.get(this.url);

    this.obs.subscribe(data =>{
      this.noticias = data['results'];
      console.log(this.noticias);
    });

  }
  pushPageEventos(horario, titulo){
    this.navCtrl.push(ContactPage, {
        evento: {
            horario: horario,
            titulo: titulo,
        }
    });
  }

  pushPageNoticias(titulo, descricao, image){
    this.navCtrl.push(NoticiaPage, {
      noticia: {
          titulo: titulo,
          descricao: descricao,
          image: image
      }
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.obs.subscribe(data =>{
        this.noticias = data['results'];
        console.log(this.noticias);
      });
      refresher.complete();
    }, 2000);
  }
}
