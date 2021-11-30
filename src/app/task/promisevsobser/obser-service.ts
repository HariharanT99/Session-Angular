import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ObserService {
    constructor() {
        

    const welcomePromise = new Promise(resolve => {

        //Promise
        console.log("In Promise executor fn");
      
            resolve("Welcome!");
        });

        console.log("Before calling the then method");

        welcomePromise.then(console.log);


        //Observable
        const welcomeObservable$ = new Observable(observer => {
            console.log("In Observable producer fn");
          
            observer.next("Welcome!");
            observer.complete();
          });
          
          console.log("Before calling the subscribe method");
          
          welcomeObservable$.subscribe(console.log);
    }

    obserList = ['ele1','ele2','ele3'];

    promList = ['obj1','obj2','obj3']

    eleCounter = 3;
    objCounter = 3;

    PushEle(){

        this.eleCounter += 1;
        this.obserList.push('ele'+this.eleCounter);
    }

    PushObj(){
        this.objCounter +=1;
        this.obserList.push('obj'+this.objCounter);
    }


}