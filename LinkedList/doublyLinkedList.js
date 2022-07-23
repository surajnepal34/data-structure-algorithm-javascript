class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.length = 1;
    }

    append(value){
        let currentNode = this.head;
        let leadNode = null;
        while(currentNode !== null){
            console.log("The current Node :" , currentNode);
            leadNode = currentNode;
            currentNode = currentNode.next;
        }
        let newNode = new Node(value);
        leadNode.next = newNode;
        newNode.prev = leadNode;
        this.length++;
    }

    prepend(value){
        let currentNode = this.head;
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        this.printList();
    }

    insert(value, index){
        let currentNode = this.head;
        let leadNode = this.head;
        let newNode = new Node(value);
        if(index < 0){
            this.printList();
            return;
        }
        if(index >= this.length){
            while(currentNode !== null){
                leadNode = currentNode;
                currentNode = currentNode.next;
            }
            leadNode.next = newNode;
            newNode.prev = leadNode;
            this.length++;
            printList();
        }
        if(index === 0){
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            this.printList();
            return;
        }

        let counter = 0;
        while(counter < index){
            leadNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
        leadNode.next = newNode;
        newNode.prev = leadNode;
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        this.length++;
        this.printList();

    }

    printList(){
        let currentNode = this.head;
        let nodeValueArray = [];
        while(currentNode !== null){
            nodeValueArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('List of value :', nodeValueArray);
    }
}

myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList);
myDoublyLinkedList.append(11);
console.log(myDoublyLinkedList);
myDoublyLinkedList.append(12);
console.log(myDoublyLinkedList);
myDoublyLinkedList.prepend(9);
console.log(myDoublyLinkedList);
myDoublyLinkedList.insert(20,0);
//console.log(myDoublyLinkedList);