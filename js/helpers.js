var React = require('react');

var pluralize = function (count, singular, plural) {
    if (count != 1) {
        return plural
    } else {
        return singular
    }
}


var ordinal = function (number) {
    last_two_digits = number % 100
    if (4 <= last_two_digits >= 20) {
        ordinal = "th"
    } else {
        last_digit = last_two_digits % 10
        if (last_digit == 1) {
            ordinal = 'st'
        } else if (last_digit == 2) {
            ordinal = 'nd'
        } else if (last_digit == 3) {
            ordinal = 'rd'
        } else {
            ordinal = 'th'
        }
    }
    return number.toString() + ordinal
}

module.exports = {
    pluralize: pluralize,
    ordinal: ordinal
}
