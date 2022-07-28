const Students = [
    
    {
        name : "Muhammad Shakir",
        CGPA : 3.5,
    },
    
    {
        name : "Anum Mustafa",
        CGPA : 3.3,
    },
    
    {
        name : "Maira Nawaz",
        CGPA : 2.7,
    }

    
    ];
    
    const bestStudents = Students.reduce((good,bad) => {
        if(good.CGPA > bad.CGPA){
            return good
        }
          return bad;
    });
    
    console.log(bestStudents)
