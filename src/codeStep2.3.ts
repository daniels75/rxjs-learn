import { Subject, Observable } from 'rxjs';
import {of} from 'rxjs';
import {share} from "rxjs/operators"; 

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// Hot Observables

var observable  = Observable.create((observer: any)  => {
    try {
        observer.next('Hej guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})
/// this does NOT work !!! .share();


var observer = observable.subscribe(
    (x:any) => addItem(x)
)

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem(`Subscriber2 ${x}`)
    )

}, 1000)
