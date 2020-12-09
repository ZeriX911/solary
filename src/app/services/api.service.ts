import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, pipe, throwError ,of} from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';
import { Moon } from "../objects/moon";
import { Body } from "../objects/body";
import { Planet } from "../objects/planet";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  apiURL='https://api.le-systeme-solaire.net/rest.php/bodies';
  testUrl='https://api.le-systeme-solaire.net/rest.php/bodies/terre';
  getData():Observable<Body[]>
  {
    console.log("Values Read from API")
    return this.http.get(this.apiURL).pipe(map((object)=>ToBodyArray(object)));
  }
  searchByEngName(Name:string,engName:string):Observable<Body>{
    return this.http.get(this.testUrl).pipe(map((object)=>ToBody(object)));
  }
  
}
function ToBodyArray(object:any):Body[]{
  return object.bodies.map(ToBody);

}
function ToBody(object: any): Body {
  return {
    id:              object.id,
    name:            object.name,
    englishName:     object.englishName,
    isPlanet:        object.isPlanet,
    moons:           object.moons,
    semimajorAxis:   object.semimajorAxis,
    perihelion:      object.perihelion,
    aphelion:        object.aphelion,
    eccentricity:    object.eccentricity,
    inclination:     object.inclination,
    mass:            object.mass,
    vol:             object.vol,
    density:         object.density,
    gravity:         object.gravity,
    escape:          object.escape,
    meanRadius:      object.meanRadius,
    equaRadius:      object.equaRadius,
    polarRadius:     object.polarRadius,
    flattening:      object.flattening,
    dimension:       object.dimension,
    sideralOrbit:    object.sideralOrbit,
    sideralRotation: object.sideralRotation,
    aroundPlanet:    object.aroundPlanet,
    discoveredBy:    object.discoveredBy,
    discoveryDate:   object.discoveryDate,
    alternativeName: object.alternativeName,
    axialTilt:       object.axialTilt,
    rel:             object.rel
  };
}