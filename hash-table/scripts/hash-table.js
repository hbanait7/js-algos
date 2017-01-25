function HashTable() {

    var data = [];

    var add = function(key, value) {
        data[key] = value;
    };

    var find = function(key) {
        return data[key];
    };

    var length = function() {
        var count = 0;

        for(var item in data) {
            var info = data[item];
            if(info && info.key) {
                count++;
            }
        }

        return count;
    };

    var calculate = function(key) {
        // Very weak calculation algorithm, but is useful for dealing with matches
        return key.charCodeAt(0);
    };

    return {
        add: add,
        find: find,
        length: length,
        data: data
    };
}

var names = new HashTable();

names.add('Bob', 'Smith');

console.log(names.find('Bob'));
console.log(names.data)


