import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-singel-appareil',
  templateUrl: './singel-appareil.component.html',
  styleUrls: ['./singel-appareil.component.css']
})
export class SingelAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string ='Status';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    //+id cast id en number
    if(this.appareilService.getAppareilById(+id) === undefined) {
      this.router.navigate(['/not-found']);
    } else {
      this.name = this.appareilService.getAppareilById(+id).name;
      this.status = this.appareilService.getAppareilById(+id).status;
    }
  }

}
