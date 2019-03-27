const gcd = (array) => {
    let total = 1;
    for (let element of array) {
        total *= element;
    }
    return total;
}

module.exports = gcd;