import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  links=['list','map'];
  activeLink =this.links[0] ;
  constructor() { }

  ngOnInit(): void {
   
  }

}
