'use strict';

function collect_all_even(collection) {
    var evenArray = [];

    collection.forEach(function (item) {
        if (item % 2 === 0) {
            evenArray.push(item);
        }
    });

    return evenArray;
}

module.exports = collect_all_even;
