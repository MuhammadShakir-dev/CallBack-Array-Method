// Reduce execute a reducer function on each element of the array resulting in a single value.

const prices = [19.99,250,399,799,1299];

const totalSum = prices.reduce((total,price) => {
    return total + price;
});

console.log(totalSum);

//Lets take another exapmle.

// finding the min and max price from this array of proces.

const minPrice = prices.reduce((min,max) => {
     if(min < max){
         return min
     }else{
         return max
     }
} );

console.log(minPrice);


// lets do it for finding maximum value from the array.

const maxPrice = prices.reduce((min,max) => {
    if(max > min){
        return max
    }else{
        return min
    }
});

console.log(maxPrice);
