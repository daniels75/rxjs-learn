import { interval, Subject, Observable, of } from 'rxjs';
import {  merge, from } from 'rxjs';
import { map, pluck, skipUntil } from 'rxjs/operators';

// Operator example - interval


const observable1  = Observable.create((data:any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

const observable2 = new Subject
setTimeout(() => {
    observable2.next('Hej!')
}, 3000)

const newObs = observable1.pipe(skipUntil(observable2))

newObs.subscribe((x:any) => addItem(x))

// Output
// 3
// 4
// 5
// etc

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}