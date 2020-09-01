import { Component, Input,OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
       return 'green';
    }
    return 'red';
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexAppareil);
  }
}
