import { Subject, Observable } from 'rxjs';
import {of} from 'rxjs';

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// Hot vs COLD Observables

var observable: Observable<any>  = Observable.create((observer: any)  => {
    try {
        observer.next('How are you?')
        setInterval(() => {
            observer.next('Im good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
});


var observer1 = observable.subscribe(
    (value:any) => addItem(value),
);

var observer2 = observable.subscribe(
    (value:any) => addItem(value),
);

observer1.add(observer2);

setTimeout(() =>  {
    observer1.unsubscribe();
}, 6001)

