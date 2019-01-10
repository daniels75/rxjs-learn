import { Subject, Observable } from 'rxjs';
import {of} from 'rxjs';

var obser: Observable<any> = new Observable<any>();

// Step 0 - my example
var obsFrom  = of(1,2,3);
obsFrom.subscribe( {
    next: value => console.log(`Current value: ${value}`)
})

// Step 1.1 - creates an simple Observable
var obs1: Observable<any>  = Observable.create(function subscribe(observer: any) {
    observer.next('Hej hej hej...')
});

// Step 1.2 - creates an simple Observableshorter version
var obs2: Observable<any>  = Observable.create((observer: any)  => {
    observer.next('Hej hej hej...')
});

// Step 1.2 subscription - without it nothing will be showed in the console
var subsciption2 = obs2.subscribe(
(value:any) => console.log(`value from obs2: ${value}`),
(error:any) => console.error("error is: ${error}"),
() => console.log('subscription completed')
)

// Step 1.3 subscription with addItem function
obs2.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


// Step 1.4 new Observable
var obs4: Observable<any>  = Observable.create((observer: any)  => {
    observer.next('obs4> Hej hej hej...')
    observer.next('obs4> What is next? ...')
    observer.complete();
    observer.next('obs4> this will be not showed ...')
});


obs4.subscribe(
    (value:any) => addItem(value),
    (error:any) => addItem(error),
    () => addItem('obs4> completed')
);


