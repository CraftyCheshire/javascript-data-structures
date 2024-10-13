class Queue {
    constructor() {
        this.storage = [];
    }

    enqueue(element) {
        this.storage.push(element);
    }

    dequeue() {
        return this.storage.shift();
    }

    peek() {
        return this.storage[0];
    }

    isEmpty() {
        return this.storage.length === 0; 
    }
}

const queue = new Queue();

queue.enqueue("Phyllis");
queue.enqueue("Bobby");
queue.enqueue("Ann");

console.log(queue)
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue)
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue)
