import { interval, Subject, Observable, of } from 'rxjs';
import {  merge, from } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

// Operator example - pluck

from([
    { first: 'Daniel', last: 'Sadowski', age: '33'},
    { first: 'Andy', last: 'Sadowski', age: '34'},
    { first: 'Simon', last: 'Sadowski', age: '35'}
])
.pipe(pluck('first'))
.subscribe((value:any) => addItem(value))




function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}