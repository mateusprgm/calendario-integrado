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
    // for (let index = 0; index < 10; index++) {
      
    //   this.credenciado.push(
    //     ["Grupo"+index, ["300"]]
    //   );
       
    //    this.items.push(["Fulano"+index, ["300"+index],["Grupo"+index],["Seção Sindical: cidade"+index]]);
       
       
    //  }
     
    this.items = [
      
        
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
     
     
     //console.log(this.items[1]);
    //  console.log(this.items);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          
          return (item['name'].toLowerCase().indexOf(val.toLowerCase()) > -1);
           
        })
      }
    
    
  }
  pushPageG(grupo, nome_grupo, nome_pessoa){
    this.navCtrl.push(GrupoPage, {
        item: {
            grupo: grupo,
            nome_grupo: nome_grupo,
            nome_pessoa: nome_pessoa,
        }
        
    });
  }

}
