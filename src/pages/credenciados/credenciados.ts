import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CredenciadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credenciados',
  templateUrl: 'credenciados.html',
}
)
export class CredenciadosPage {
  credenciado: Array<Object> = [];
  
  

  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    // for (let index = 0; index < 10; index++) {
    //   this.aaa = Array.length;
    //   this.credenciado[index] = {
    //     results:{
    //      titulo: "fulano"+index,
    //      descricao: "300"+index,
    //   }
 
    //   };
      
    //  }
    //  console.log(this.credenciado+this.aaa);

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

 
  

  initializeItems() {
    this.items = [];
    for (let index = 0; index < 10; index++) {
      
      this.credenciado.push(
       {
         
            titulo: "fulano"+index,
            descricao: "300"+index,
         
       }
      );
       
       this.items.push("fulano"+index);
       
       
     }console.log(this.credenciado);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    for (let index = 0; index < 10; index++) {
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    
  }
  

}
