import { interval, Subject, Observable, of } from 'rxjs';
import {  merge } from 'rxjs';

// Observer - merge exmaple

const observable1 = Observable.create((observer:any) => {
    observer.next('Hej guys!');
})

const observable2 = Observable.create((observer:any) => {
    observer.next('How is it going?');
})

const mergeObs = merge(observable1, observable2);

mergeObs.subscribe(
    value => addItem(`Value: ${value}`)
)




function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}