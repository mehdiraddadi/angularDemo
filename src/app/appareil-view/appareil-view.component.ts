import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject ) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date)
        }, 200
      )
    }
  );
  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 400
    );
  }

  /**
   * executer ou moment de la creation de composante par angular
   * et pares l'execution de constructeur
   */
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppreilSubject();
    // this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  onSave() {
    this.appareilService.saveAppeilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }


}
