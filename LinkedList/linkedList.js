class LinkedList {
    constructor (value){
        this.value = value;
        this.next = null;
    }
    append(value){
        if(this.value === undefined || this.value ===  null){
            this.value = value;
            this.next = null;
        } else{
            while(this.next !== null){
                this.next = this.next.next;
            }
            this.next = new LinkedList(value);
        }
    }
}


const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(11);
console.log(myLinkedList);