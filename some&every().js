// SOme and every returns true and false values according to the test.
// if any one element to the array passes the test then some returns a true  value otherwise it will give you a false value
// if all element of the aray passes the test then every gives you a true value other wise it will give you a false value.


const ary = [01,10,23,45,63,43,65];

let test = ary.every( x => x < 70 );
console.log(test);


const ary = [01,10,23,45,63,43,65,84];

let test = ary.some( x => x > 70 );
console.log(test);
