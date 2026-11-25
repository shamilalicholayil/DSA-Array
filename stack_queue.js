// Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.length ? this.items.pop() : null;
  }
  peek() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }
  display() {
    return [...this.items];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Queue
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.items[this.head++];
    if (this.head > 50 && this.head * 2 >= this.items.length) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }
    return value;
  }
  front() {
    return this.isEmpty() ? null : this.items[this.head];
  }
  display() {
    return this.items.slice(this.head);
  }
  isEmpty() {
    return this.head >= this.items.length;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(
  "Stack display:",
  stack.display(),
  "pop:",
  stack.pop(),
  "now:",
  stack.display(),
);

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(
  "Queue display:",
  queue.display(),
  "dequeue:",
  queue.dequeue(),
  "now:",
  queue.display(),
);
