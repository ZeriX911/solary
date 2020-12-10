import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { SolaryService } from '../services/solary.service'
import { Body } from '../objects'
import { DbService } from '../services/db.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('items', [
      transition('* => *', [
        query('.planets',style({ transform: 'translateX(-1000%)'})),
        query('.planets',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]

})
export class MainComponent implements OnInit, AfterViewInit {
  private subscription:Subscription;
  bodies: Body[] =[];
  planets: Body[] =[];
  requiredStuff = [
    'mercure',
    'venus',
    'terre',
    'mars',
    'jupiter',
    'saturne',
    'uranus',
    'neptune',
    'pluton'
  ];

  constructor(private main: SolaryService, private db: DbService) {
   this.subscription= this.main.getBodies().subscribe(data => this.bodies = data).add( 
    this.subscription=this.db.getBodiesById(this.requiredStuff).subscribe(x=>this.planets=x)
    );
    
    
  }
  ngAfterViewInit(): void {

  }

 
  ngOnDestroy(){
   this.subscription.unsubscribe(); 

  }
  ngOnInit(): void {

    
  }



}
