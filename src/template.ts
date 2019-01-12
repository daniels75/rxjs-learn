import { interval } from 'rxjs';
import { Subject, Observable } from 'rxjs';
import { publish, tap } from 'rxjs/operators';


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}