describe('Testing Stacks', function() {
    it('Starts as an empty list', function() {
        var names = new Stack();

        expect(0).toBe(names.length());
    });

    it('Can add elements to the list', function() {
        var names = new Stack();

        names.add('Bobby');

        expect(names.length()).toBe(1);
    });

    it('Allows multiple items to be added', function() {
        var names = new Stack();

        names.add('Bobby');
        names.add('Andrew');

        expect(names.length()).toBe(2);
    });

    it('Removes the correct element', function() {
        var names = new Stack();

        names.add('Bobby');
        names.add('Andrew');

        expect(names.remove()).toBe('Andrew');
    });

    it('Returns undefined if there are no more elements', function() {
        var names = new Stack(); 

        expect(names.remove()).toBe(undefined);
    });
});