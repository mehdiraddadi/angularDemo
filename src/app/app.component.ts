import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  secondes: number;
  counterSubscription: Subscription
  constructor() {
  }

  ngOnInit() {
    const counter = interval(1000);
    // interval(1000).subscribe(
    //   (val) => {
    //     this.secondes = val;
    //   },
    //   (error => {
    //     console.log('Une erreur!')
    //   }),
    //   () => {
    //     console.log('observable continue')
    //   }
    // );

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
