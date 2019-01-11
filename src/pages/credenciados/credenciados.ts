import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoPage } from '../grupo/grupo';

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
  // items: string[];
  items = [];
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
    this.credenciado = [];
    for (let index = 0; index < 10; index++) {
      
      this.credenciado.push(
        ["Grupo"+index, ["300"]]
      );
       
       this.items.push(["Fulano"+index, ["300"+index],["Grupo"+index],["Seção Sindical: cidade"+index]]);
       
       
     }//console.log(this.items[1]);
     console.log(this.items);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          
          return (item[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
           
        })
      }
    
    
  }
  pushPageG(item){
    this.navCtrl.push(GrupoPage, {
        item: {
            nome: item[0],
            sala: item[1],
            grupo: item[2],
            secao: item[3]
        }
        
    });
  }

}
