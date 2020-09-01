import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class AppareilService {
  appareilSubject = new Subject<any[]>();

  private appareils = [];
  // private appareils = [
  //   {
  //     id: 1,
  //     name: "Machine à laver",
  //     status: "éteint"
  //   },
  //   {
  //     id: 2,
  //     name: "Television",
  //     status: "allumé"
  //   },
  //   {
  //     id: 3,
  //     name: "Ordinateur",
  //     status: "allumé"
  //   }
  // ];
  constructor(private httpClient: HttpClient) {
  }
  emitAppreilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );

    return appareil;
  }

  switchOnAll(){
    for( let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppreilSubject();
  }

  switchOffAll(){
    for( let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppreilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppreilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppreilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppreilSubject();
  }

  saveAppeilsToServer(){
    this.httpClient.put('https://http-client-42c13.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistremment terminer')
        },
        (error) => {
          console.log('Erreur de sauvegarde!' + error)
        }
      )
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-42c13.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppreilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
