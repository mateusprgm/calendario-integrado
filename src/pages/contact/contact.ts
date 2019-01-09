import { Component, enableProdMode } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
// import { Md5 } from 'ts-md5/dist/md5';
import { EventoPage } from '../evento/evento';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';


enableProdMode()
registerLocaleData(localeZh);
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
   
    Eventos = {
        results: [{
            data: ['28/01'], 
            dia: 'Segunda-feira',
            evento: {
              tema:  ['Credenciamento', 'Credenciamento', 'Plenária de Abertura', 'Plenária de Instalação', 'Plenária do Tema I'],
              horario: ['9h as 12h', '14h as 18h', '10h as 13h', '10h as 13h', '15h as 21h'],
              },
         },
         {
            data: ['29/01'], 
            dia: 'Terça-feira',
            evento: {
                tema:  ['Grupo Misto Tema II','Grupo Misto Tema II'],
                horario: ['9h ás 12h', '13h30 ás 17h30']
                },
         },
         {
          data: ['30/01'], 
          dia: 'Quarta-feira',
          evento: {
            tema:  ['Grupo Misto Tema III','Grupo Misto Tema IV'],
            horario: ['9h ás 12h', '13h30 ás 17h30']
            },
         },
         {
          data: ['31/01'], 
          dia: 'Quinta-feira',
          evento: {
            tema:  ['Plenária do Tema II','Plenária do Tema II'],
            horario: ['9h ás 12h', '13h30 ás 16h30']
            },
       },
       {
          data: ['01/02'], 
          dia: 'Sexta-feira',
          evento: {
            tema:  ['Plenária do Tema III', 'Plenária do Tema IV'],
            horario: ['13h30 ás 17h30', '19h as 22h']
            },
       },
       {
          data: ['02/02'], 
          dia: 'Sábado',
          evento: {
            tema:  ['Plenária do Tema IV','Plenária de Encerramento'],
            horario: ['9h ás 12h', '13h30 ás 15h30']
            },
       },
      ]
    };
   
   
   





  

//   loadlabel = "Carregando Eventos...";
//   chars:Observable<any>;
//   lista:Observable<any>;
//   descricao:Observable<any>;
//   character: Observable<any>;
//   public  : Array<number>;
//   link:String;
//   private chavePublica:string = "875b4f23c8df4dfd7835e73632ae9403";
//   private chavePrivada:string = "4121063d76d77c633ad352cd204b77ed01e91942";
//   private url:string = "https://gateway.marvel.com:443/v1/public/comics?orderBy=modified&apikey=";
//   private timestamp = Number(new Date());
  
    
  
//   hash = Md5.hashStr(this.timestamp+this.chavePrivada+this.chavePublica);

  

//   grupo: Array<object>;
  
  constructor(public navCtrl: NavController, public HttpClient: HttpClient, public grupos: HttpClient, public loadingCtrl: LoadingController) {
    // this.chars = this.HttpClient.get(this.url+this.chavePublica+'&ts='+this.timestamp+'&hash='+this.hash); 
    // console.log(this.chars);
    // // this.loadEvents();
    // // this.presentLoadingDefault();
    // console.log(this.Eventos);
    
   
    
    
    
  }
    
    
    pushPageEvento(horario, titulo){
        this.navCtrl.push(EventoPage, {
            evento: {
                horario: horario,
                titulo: titulo,
            }
        });
    }
  
    
//   presentLoadingDefault() {
//     let loading = this.loadingCtrl.create({
//       content: 'Carregando eventos...'
//     });
  
//     loading.present();
  
//     setTimeout(() => {
//       loading.dismiss();
//       this.today();
//     }, 5000);
//   }
 

//     eventSource;
//     viewTitle;
//     isToday: boolean;
//     calendar = {
//         mode: 'month',
//         currentDate: new Date(),
//     }; // these are the variable used by the calendar.

//     loadEvents() {
//         this.eventSource = this.createRandomEvents(); 
//         this.today();
//     }
//     onViewTitleChanged(title) {
//         this.viewTitle = title;
//         let aux = this.viewTitle.split(",");
//         aux = aux[0];
//         this.viewTitle  = aux;
//     }
//     onEventSelected(event) {
//         this.navCtrl.push(EventoPage, {
//             img: event.option.url,
//             title: event.title,
//             date: event.startTime,
//            });
//     }
//     changeMode(mode) {
//         this.calendar.mode = mode;
//     }
//     today() {
//         this.calendar.currentDate = new Date();
//     }
//     onTimeSelected(ev) {
       
//         //  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
//         //      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
//     }
//     onCurrentDateChanged(event:Date) {
//         var today = new Date();
//         today.setHours(0, 0, 0, 0);
//         event.setHours(0, 0, 0, 0);
//         this.isToday = today.getTime() === event.getTime();
        
//     }
//     doRefresh(refresher) {
//         console.log('Begin async operation', refresher);
    
//         setTimeout(() => {
//           console.log('Async operation has ended');
//           refresher.complete();
//           this.today();
//         }, 2000);
        
//       }
      
//     createRandomEvents() {
//         var events = [];
     
        
//         this.chars
//         .subscribe((data: Response) => {
            
//             this.grupo = data['data']['results'];
//             this.grupo.forEach(element => {
//                 var date = new Date();
//                 var startTime;
//                 var endTime;
//                 var startDay = Math.floor(Math.random() * 90) - 45;
//                 var endDay = Math.floor(Math.random() * 2) + startDay;

//                 startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
//                 endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));

//                 events.push({
//                     title: element['title'],
//                     startTime: startTime,
//                     endTime: endTime,
//                     allDay: false,
//                     option:{
//                         url: element['thumbnail']['path']+"."+element['thumbnail']['extension'],
//                     }
//                 });
//             });
//         })
        
        
        
//         return events;
//     }
//     onRangeChanged(ev) {
//         // console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
//     }
//     markDisabled = (date:Date) => {
//         var current = new Date();
//         current.setHours(0, 0, 0);
//         return date < current;
//     };
}