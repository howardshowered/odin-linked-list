import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.next = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = null;
            this.size++;
            return;
        }
        
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        
        currentNode.next = newNode;
        this.tail = newNode;
        this.size++;
        
    }

    prepend( value ) {
        const newNode = new Node(value);
        if(!head){
            head = newNode;
            return;
        }

        let currentNode = this.head;
        newNode.next = currentNode;
        this.head = newNode;
        this.size++;

    } 

    size () {
        return this.size;
    }

    head() {
        return this.head;
    }

    //@Todo add a tail memeber variable
    tail() {
        if(!head)
            return undefined;
        let currentNode = this.head;
        while(currentNode.next)
        {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    at(index) {
        if( index >= this.size) {
            return undefined;
        }

        let currentNode = this.head;
        for(let i = 0; i <  index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    pop() {
        if(!this.head)
            return undefined;

        let currentNode = this.head;
        let previousNode;
        while(currentNode.next)
        {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.size--;
        if(this.size === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    contains(value) {
        if(!this.head)
            return false;

        let currentNode = this.head;
        while(currentNode.next)
        {
            if(currentNode.value === value)
                return true;
            currentNode = currentNode.next;
        }
        return false;

    }

    findIndex(value) {
        if(!this.head)
            return -1;

        let currentNode = this.head;
        let currentIndex = 0;
        while(currentNode.next)
        {
            if(currentNode.value === value)
                return currentIndex;
            currentNode = currentNode.next;
            currentIndex++;
        }
        return -1;
    
    }

    toString() {
        if(!this.head)
            return '';
        let currentNode = this.head;
        let result = '';
        while(currentNode.next)
        {

            result += currentNode.value + ' -> ';

            currentNode = currentNode.next;
        }

        if(currentNode.value === this.tail.value)
            result += currentNode.value;

        return result;

    }


    //@TODO.. extra credit but good exercise
    insertAt(index, ...values) {
        if( index < 0 || index >= this.size)
            throw new RangeError(`The index must be valid`);

        // const 
        let prevNode = index === 0 ? null : this.at(index - 1);
        let nextNode = this.at(index);

        values.forEach( (value, valueIndex) => {
            if(valueIndex === 0 && index === 0)
            {
                const newNode = new Node(value);
                this.head = newNode;
                newNode.next = nextNode;

            }   

        });
        

    }


}
