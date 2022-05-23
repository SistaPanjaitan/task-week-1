function countToTen(start) {
    let count = '';

    for (let i = start; i <= 10; i++) {
        count+= i + ' ';
    }
    return count; 

}

console.log(countToTen(9))
