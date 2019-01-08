import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  //  img: string;
  //  img2: string;
  //  title: string;
  //  date;
  evento: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   this.evento = navParams.get('evento');
    
   console.log(this.evento);
   
    // this.img = navParams.get('img');
    // this.img2 = navParams.get('img2');
    // this.title = navParams.get('title');
    // this.date = new Date(navParams.get('date'));
    // console.log(this.img2);
  }
}
