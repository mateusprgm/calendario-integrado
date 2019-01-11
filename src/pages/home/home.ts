import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  pushPageEventos(horario, titulo){
    this.navCtrl.push(ContactPage, {
        evento: {
            horario: horario,
            titulo: titulo,
        }
    });
  }
}
