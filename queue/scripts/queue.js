function Queue() {

    var data = [];

    var add = function(element) {
        data.push(element)
    };

    var remove = function() {
        data.shift();
    };

    var length = function() {
        return data.length
    };

    return {
        add: add,
        remove: remove,
        length: length
    };
}
