import { Injectable } from '@angular/core';
import { of, Observable, Subject, from, concat } from 'rxjs';
import { Moon, Body, Planet } from "../objects";
import { APIService } from "../services/api.service";
import { defaultIfEmpty, delayWhen, mapTo, shareReplay, switchMap } from 'rxjs/operators';
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
    return this.storage.getAllBodies().pipe(switchMap((obj) => {
      if (obj.length > 0) {
        return this.storage.getAllBodies();
      } else if (navigator.onLine) {
        return this.api.getData().pipe(
          delayWhen(data =>
            concat(this.storage.putAllBodies(data).pipe(
              defaultIfEmpty(undefined)))
            )
          )
      }else{
        return of(obj);
      }
    }
    ));
  }
}
