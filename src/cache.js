import Node from './node';

export default class Cache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Object();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.pre = this.head;
        this.head.pre = null;
        this.tail.next = null;
        this.counter = 0;
    }

    // Function removes node from the list
    removeNode = (node) => {
        console.log(node.toString());
        node.pre.next = node.next;
        node.next.pre = node.pre;
    };

    // Function adds node to the head of the list
    addNode = (node) => {
        node.next = this.head.next;
        node.next.pre = node;
        node.pre = this.head;
        this.head.next = node;
    };

    // Function retrieves value from the map by the key
    // If key does not exist, returns null
    get = (key) => {
        if (this.map[key]) {
            const node = this.map[key];
            const res = node.value;

            // Update list by moving node to the head
            this.removeNode(node);
            this.addNode(node);

            return res;
        } else {
            return null;
        }
    };

    // Function sets a new key/value pair
    // If key exists, just update value
    set = (key, value) => {
        if (this.map[key]) {
            const node = this.map[key];

            // Update value and moving node to the head
            node.value = value;
            this.removeNode(node);
            this.addNode(node);
        } else {
            const node = new Node(key, value);
            this.map[key] = node;
            this.addNode(node);

            // Check counter, if cache achieved max capacity, remove one node from the tail.
            if (this.counter < this.capacity) {
                this.counter++;
            } else {
                delete this.map[this.tail.pre.key];
                this.removeNode(this.tail.pre);
            }
        }
    }
}