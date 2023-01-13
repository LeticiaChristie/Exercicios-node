//app for export elements in between file ex002
function average(n1,n2,n3) {
     return (n1 + n2 + n3) / 3
}

const averageTemperature = average(25,28,31)
console.log(averageTemperature);

module.exports = (average)