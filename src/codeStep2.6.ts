import { interval } from 'rxjs';
import { Subject, Observable } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// Warm Observables - better example
// please see: https://stackblitz.com/edit/typescript-5ycshu?file=index.ts

const source = Observable.create((observer:any) => {
    observer.next(1);
    setTimeout(() => observer.next(2), 1000)
    setTimeout(() => {
        observer.next(3)
        observer.complete()
    }, 2000)
})

const published = source.pipe(publish());


const subscription1$ = published.subscribe(
    (value: any) => addItem(`1st subscriber - value from Observable: ${value}`)
)

setTimeout(() => {
    const subscription1$ = published.subscribe(
        (value: any) => addItem(`2nd subscriber - value from Observable: ${value}`)
    )
}, 900)

published.connect();


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}