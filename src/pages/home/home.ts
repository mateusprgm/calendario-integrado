import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CredenciadosPage } from '../credenciados/credenciados';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  pushPageCredenciados(horario, titulo){
    this.navCtrl.push(CredenciadosPage, {
        evento: {
            horario: horario,
            titulo: titulo,
        }
    });
  }
}
