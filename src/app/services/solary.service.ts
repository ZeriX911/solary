import { Injectable } from '@angular/core';
import { of, Observable, Subject, from } from 'rxjs';
import { Moon, Body, Planet } from "../objects";
import { APIService } from "../services/api.service";
import { shareReplay, switchMap } from 'rxjs/operators';
import { DbService } from './db.service'
@Injectable({
  providedIn: 'root'
})
export class SolaryService {

  constructor(
    private api: APIService,
    private storage: DbService
  ) { }
  public getBodies(): Observable<Body[]> {
  return this.storage.getAllBodies().pipe();
  
  
  }
}
