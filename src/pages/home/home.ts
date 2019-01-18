import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';


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
  url2 = "http://webtecsites.com.br/api/doc/agendas";

  obs:Observable<any>;
  obs2:Observable<any>; 
  public noticias: Array<Object>;
  public eventos = [];
  public evento = [];


  constructor(public navCtrl: NavController, public HttpClient: HttpClient) {

    let data = new Date("2015-03-25");
    console.log(data);

    this.obs = HttpClient.get(this.url);

    this.obs.subscribe(data =>{
      this.noticias = data['results'];
      // console.log(this.noticias);
    });

    this.obs2 = HttpClient.get(this.url2);

    this.obs2.subscribe(data =>{
      this.eventos = data['results'];
      // console.log(this.eventos);

      this.eventos.forEach(element => {
        this.evento.push({
          evento:element
        }
       );
      });
      console.log(this.evento);
    })
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
    // console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.obs.subscribe(data =>{
        this.noticias = data['results'];
        // console.log(this.noticias);
      });
      refresher.complete();
    }, 2000);
  }
}
