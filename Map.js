
// map method takes an array and make a new array from that 




    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const double = ary.map(function (num) {
      return num * 2;
    });

    document.write(double);


    const movies = [

        {
            name : "Avengers infinity war",
            score : 91,   
        },
        
        {
            name : "Avenger end game",
            score : 97,
        }
        
    ];

    const filter  = movies.map(function(title){
        return title.name.toUpperCase() + "$" ;
    })
