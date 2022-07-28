// this keyword behaves different in traditional functions and different in an arrow function .

const studentData = {
    
    fname : " Muhammad ",
    lname : "Shakir",
    Age  :  21,
    University : "SMIU",
    stdID : "BSE-20F-077",
    dept : "Software Engineering (Morning)",
    
    fullName : function(){
        return `${this.fname}${this.lname}`;
    },
    
    Education : function(){
        return `${this.University} - ${this.stdID} `
    },  
};

console.log(studentData.fullName());
console.log(studentData.Education());
console.log(studentData.dept);
