import { interval, Subject, Observable, of } from 'rxjs';
import {  merge } from 'rxjs';

// Observer - merge exmaple

const observable1 = of(1,2,3);
const observable2= of(4,5);

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