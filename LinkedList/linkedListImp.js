class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    let trav = this.head;
    if (index < 0 || index >= this.length) return this.prepend(value);
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      trav = trav.next;
    }
    newNode.next = trav.next;
    trav.next = newNode;
    this.length++
  }
  remove(index){
    let currentNode = this.head;
    if(index === 0){
        this.head = this.head.next;
        this.length--
        this.printList();
        return;

    }
    if(index< 0 || index >= this.length){
        return -1;
    }
    let i = 0;
    while(i !== index - 1){
        currentNode = currentNode.next;
        i++;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
    this.printList();
  }

  printList() {
    let trav = this.head;
    let valueList = [];
    while (trav !== null) {
      valueList.push(trav.value);
      trav = trav.next;
    }
    console.log("The elements are :", valueList);
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(15);
console.log(myLinkedList);
myLinkedList.prepend(9);
console.log(myLinkedList);
myLinkedList.insert(0, 99);
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.remove(3);
