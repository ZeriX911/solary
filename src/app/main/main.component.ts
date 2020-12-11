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
  loading:boolean=true;
  bodies: Body[] =[];
  planets: Body[]|undefined;
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
  //searchStuff=string.split('');
  constructor(private main: SolaryService, private db: DbService) {
  this.subscription=this.main.getBodies().subscribe(data => this.bodies = data); 
   
    
    
    
  }
  ngAfterViewInit(): void {
    this.subscription=this.db.getBodiesById(this.requiredStuff).subscribe(x=>this.planets=x)
    if (this.planets==undefined) {
      this.loading=true;
    }

  }
  ngDoCheck(){
    if (this.planets==undefined) {
      this.loading=true;
    }else{
      this.loading=false;
    }
  }
  onSubmit(event:any) {
    if (event.target.value===""||event.target.value===undefined) {
      this.subscription=this.db.getBodiesById(this.requiredStuff).subscribe(x=>this.planets=x);
      return
    }
    console.log(this.planets);
    let arra:string[]=[];
    arra=event.target.value.split(',');
    this.subscription=this.db.getBodiesById(arra).subscribe(x=>this.planets=x);
  }
  
 
  ngOnDestroy(){
   this.subscription.unsubscribe();
    
  }
  ngOnInit(): void {

    
  }



}
