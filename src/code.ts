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
    try {
        observer.next('obs4> Hej hej hej...')
        observer.next('obs4> What is next? ...')
        observer.complete();
        observer.next('obs4> this will be not showed ...')
    } catch (err) {
        observer.error(err)
    }
});


obs4.subscribe(
    (value:any) => addItem(value),
    (error:any) => addItem(error),
    () => addItem('obs4> completed')
);


// Step 1.5  Observable with interval
var obs5: Observable<any>  = Observable.create((observer: any)  => {
    try {
        observer.next('obs5> Hej hej hej...')
        observer.next('obs5> How are you?')
        setInterval(() => {
            observer.next('obs5> Im good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
});


var observer5 = obs5.subscribe(
    (value:any) => addItem(value),
    (error:any) => addItem(error),
    () => addItem('obs5> completed')
);


setTimeout(() =>  {
    observer5.unsubscribe();
}, 6001)

// Step 1.6  Observable with interval and 2 subscription
var obs6: Observable<any>  = Observable.create((observer: any)  => {
    try {
        observer.next('obs6> How are you?')
        setInterval(() => {
            observer.next('obs6> Im good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
});


var observer61 = obs6.subscribe(
    (value:any) => addItem(value),
);
var observer62 = obs6.subscribe(
    (value:any) => addItem(value),
);

setTimeout(() =>  {
    observer61.unsubscribe();
}, 4001)
