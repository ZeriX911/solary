import { Injectable } from '@angular/core';
import { of,Observable, Subject } from 'rxjs';
import { Moon,Body,Planet} from "../objects";
import { APIService } from "../services/api.service";
import { shareReplay, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() {
    this.InitService();
   }
  private db$: Observable<IDBDatabase> | undefined ;
  private bodies: Observable<Body[]> | undefined;
  
  public getAllBodies():Observable<Body[]>{
    return this.db$.pipe(
      switchMap(
        db=>new Observable<Body[]>(subscriber=>{
          let transaction = db.transaction("bodies");
          const req= transaction.objectStore("bodies").getAll();
          transaction.oncomplete=()=>{
            transaction=null;
            subscriber.next(req.result as Body[]);
            subscriber.complete();
          }

        }
      ))
    );
  }
  public putAllBodies(Array:Body[]):Observable<never>{
    return this.db$.pipe(
      switchMap(db => new Observable<never>(subscriber => {
          let transaction = db.transaction('bodies', 'readwrite');
          Array.forEach(body => transaction.objectStore('bodies').put(body));
          transaction.oncomplete = () => {
              transaction = null;
              subscriber.complete();
          };
          return () => transaction?.abort();
      })))
  }

  public InitService():void {
    this.db$= new Observable<IDBDatabase>(
      (subscriber)=>{
        const open= indexedDB.open("bodies");
        open.onupgradeneeded=()=>{
          this.createDataBase(open.result)
        }
        open.onerror=()=>{
          console.log("An error prevented me from creating the database :(");
        }
        open.onsuccess=()=>{
          subscriber.next(open.result);
          subscriber.complete();
        }

      }
    ).pipe(shareReplay({refCount:false,bufferSize:1}));
  }
  private createDataBase(db:IDBDatabase):void{
    console.log("database has been created as: ",db);
    db.createObjectStore("bodies");
  }

}
