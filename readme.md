Implementation of **LRU** (least recently used) **Cache**.
It supports following operations: 'set' and 'get'.

set(key, value) -  Sets key/value if the key is not already present.
If key exists, just change key's value. When the cache reached
its capacity, it should remove the least recently used item
before adding a new item.

get(key) - Retrieves key's value. If key is not present, will
return null.

**Examples:**

const newCache = new Cache(3); // Create cache with capacity
of 3 items.

newCache.set('car', 'Ford'); // Add key 'car' and its value 'Ford'

newCache.get('car'); // Return 'Ford'

// Add one more items

newCache.set('model', 'Edge');

newCache.set('trim', 'Limited');

newCache.get('car'); // Return 'Ford', now the key 'car' is
most used

// Add another one item


newCache.set('tires', 'Continental'); // Add new key/value, end remove
least used key 'model'

newCache.get('model'); // Return null

**HOW TO RUN UNIT TESTS**

In terminal, clone repository using command line.

git clone https://github.com/VKapustin/lrucache.git

Install NPM modules

npm i

Run test cases using next command line:

jest

or

npm run test