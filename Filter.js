// Filter creates a new array with all the element that passes the test implemented by the ptovided funciton.

const table = [1,2,3,4,5,6,7,8,9,10];
const even = table.filter((num) => {
    return num % 2 == 0;
});

console.log(even);



const Movies = [
    
    {
        name : "Multiverse of madness",
        year : 2022,
        score : 9.5
    },
    
    {
        name : "Thor and lover",
        year : 2021,
        score : 9.3,
    },
    
    {
        name : "Avenger Infinity War",
        year : 2019,
        score : 9.8,
    },
    
    {
        name : "Spiderman far from home ",
        year : 2020,
        score : 9.2,
    }

    ];
    
    console.log("Good Movies ");
    const goodMovies = Movies.filter( m => {
        return m.score > 9.2;
    } )
    
    console.log(goodMovies);
    
    console.log("Recent Movies");
    const recentMovies = Movies.filter ( n => {
        return n.year > 2020
    })
    
    console.log(recentMovies);
    
    console.log("old Movies")
    const oldMovies = Movies.filter(x => {
        return x.year < 2020
    })
    
    console.log(oldMovies);
    
    console.log("Top Score Movies");
    const topMovies = Movies.filter(y => {
        return y.score > 9.4;
    })
    
    console.log(topMovies);
