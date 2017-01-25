describe('Testing Hash Tables', function() {
   
    it('Is able to access values it has set', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');

        expect(names.find('Bobby')).toBe('Tables');
        expect(names.length()).toBe(1);
    });

    it('Allows multiple items to be added', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');

        expect(names.length()).toBe(2);
    });

    it('Handles collisions correctly', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');
        names.add('Brandon', 'Sanderson');

        expect(names.find('Bobby')).toBe('Tables');
        expect(names.find('Brandon')).toBe('Sanderson');
        expect(names.length()).toBe(3);
    });

    it('Overwrites the previous value if key is the same', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');
        names.add('Bobby', 'Sanderson');

        expect(names.find('Bobby')).toBe('Sanderson');
        expect(names.length()).toBe(2);
    });
});