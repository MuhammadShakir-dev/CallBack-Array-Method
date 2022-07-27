//Using Map method with arrow function expression.

// This is the tpical way .

const ary = [
    {
        name : "Dr Strange",
        score : 95,
    },
    
    {
        name : "The Amazing Spiderman 2",
        score : 91, 
    }
    
    ];
    
const movies = ary.map(function(rating){
    return `${rating.name} - ${rating.score/10}`;
})

document.write(movies);

// transforming this into arrow function xpression.

const movies = ary.map((rating) => {
    return `${rating.name} - ${rating.score/10}`;
});

document.write(movies);

// transforming this into implicit function expression.

const movies = ary.map(rating => (
   `${rating.name} - ${rating.score/10}`
))

document.write(movies);
