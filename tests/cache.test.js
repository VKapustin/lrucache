import Cache from '../src/cache';

describe('Cache functionality', () => {

    // Create cache with capacity for 3 items
    const newCache = new Cache(3);

    test('Verify cache is created correctly', () => {
        expect(newCache.capacity).toEqual(3);
        expect(newCache.counter).toEqual(0);
        expect(newCache.map).toMatchObject({});
        expect(newCache.head.next).toBe(newCache.tail);
        expect(newCache.head.pre).toBeNull();
        expect(newCache.tail.next).toBeNull();
    });

    test('Verify adding items to the cache', () => {
        newCache.set('car', 'Ford');

        expect(newCache.map['car'].value).toEqual('Ford');
        expect(newCache.head.next.value).toEqual('Ford');
        expect(newCache.tail.pre.value).toEqual('Ford');
        expect(newCache.counter).toEqual(1);

        newCache.set('model', 'Edge');

        expect(newCache.map['model'].value).toEqual('Edge');
        expect(newCache.head.next.value).toEqual('Edge');
        expect(newCache.tail.pre.value).toEqual('Ford');
        expect(newCache.counter).toEqual(2);
    });

    test('Verify getting items from the cache. Verify the item goes to the first position', () => {
        expect(newCache.get('model')).toEqual('Edge');
        expect(newCache.head.next.value).toEqual('Edge');

        expect(newCache.get('car')).toEqual('Ford');
        expect(newCache.head.next.value).toEqual('Ford');
    });

    test('Verify updating info in the cache', () => {
        newCache.set('model', 'Focus');

        expect(newCache.get('model')).toEqual('Focus');
    });

    test('Verify list does not exceed maximum capacity, and last item will be removed', () => {
        newCache.set('trim', 'Limited');
        newCache.set('tires', 'Continental');

        expect(newCache.counter).toEqual(3);
        expect(newCache.get('car')).toBeNull();
    })
});