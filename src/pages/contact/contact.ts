import { Component, enableProdMode } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
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
  chars:Observable<any>;
  lista:Observable<any>;
  descricao:Observable<any>;
  character: Observable<any>;
  public  : Array<number>;
  link:String;
  private chavePublica:string = "875b4f23c8df4dfd7835e73632ae9403";
  private chavePrivada:string = "4121063d76d77c633ad352cd204b77ed01e91942";
  private url:string = "https://gateway.marvel.com:443/v1/public/comics?orderBy=modified&apikey=";
  private timestamp = Number(new Date());
  
    
  
  hash = Md5.hashStr(this.timestamp+this.chavePrivada+this.chavePublica);

  teste:string = (this.url+this.chavePublica+'&ts='+this.timestamp+'&hash='+this.hash);

  grupo: Array<object>;
  
  constructor(public navCtrl: NavController, public HttpClient: HttpClient, public grupos: HttpClient) {
    // console.log(this.teste);
    this.chars = this.HttpClient.get(this.url+this.chavePublica+'&ts='+this.timestamp+'&hash='+this.hash); 
    this.loadEvents();
     
  }
    eventSource;
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
        // locale: 'pt |pt-br'
    }; // these are the variable used by the calendar.
    loadEvents() {
        this.eventSource = this.createRandomEvents();
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        this.navCtrl.push(EventoPage, {
            img: event.option.url,
            title: event.title,
            date: event.startTime
           });
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {
        
         console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
             (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }
    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        
    }
    
    createRandomEvents() {
        var events = [];
     
        
        this.chars
        .subscribe((data: Response) => {
            this.grupo = data['data']['results'];
            this.grupo.forEach(element => {
                var date = new Date();
                var startTime;
                var endTime;
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                // startTime = new Date('2018-11-20');
                // endTime = new Date('2018-11-20');

                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
              
                events.push({
                    title: element['title'],
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                    option:{
                        url: element['thumbnail']['path']+"."+element['thumbnail']['extension']
                    }
                });
            });
        })
        
     
        
        return events;
    }
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }
    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };
}