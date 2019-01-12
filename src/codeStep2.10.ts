import { interval, Subject } from 'rxjs';
import {  AsyncSubject } from 'rxjs';

// AsyncSubject example

// AsyncSubject only emits the ver last value
// and will only do so once the complete method has been
// called upn the subjct

var asyncSubject = new AsyncSubject();


asyncSubject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    () => addItem('Observer 1 Completed')
)

var i = 1;
var int = setInterval(() => asyncSubject.next(i++), 100)

// only the very last last value has will be sent to each of the observers
// and they will only be sent for instance 
// if we remove  asyncSubject.complete() that nothing will happen
setTimeout(() => {
    var observer2 = asyncSubject.subscribe(
        data => addItem(`Observer 2: ${data}`)
    )
    // without it nothing happen
    asyncSubject.complete()
}, 500)

// output
// Observer 1: 5
// Observer 2: 5


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}