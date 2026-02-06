import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        let newNode = Node(value);
        if (!head)
            head = newNode;
        else {
            let tempNode = head;
            while(!tempNode.next) {
                tempNode = tempNode.next;
            }
            tempNode.next = newNode;
        }

    }


}
