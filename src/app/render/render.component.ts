import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Moon,Body,Planet,AroundPlanet,Vol,Mass,} from "../objects";
import { APIService } from "../services/api.service";
import {SolaryService} from "../services/solary.service"

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  //Azért undefined hogy ne sírjon a compiler
  public bodies: Observable<Body[]> | undefined;
  
  constructor(private solary:SolaryService){}

  ngOnInit(): void {
     this.Init();
  }
  
  Init():void{
    this.bodies=this.solary.getBodies();

  }
  

}
